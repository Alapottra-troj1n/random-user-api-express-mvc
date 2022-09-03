const fs = require("fs");
const { all } = require("underscore");

module.exports.getRandomUser = (req, res) => {
    fs.readFile("users.json", "utf-8", function (err, data) {
        if (err) throw err;

        const allusers = JSON.parse(data);

        const randomNumber = Math.floor(Math.random() * allusers.length);
        +1;
        const randomUser = allusers[randomNumber];

        res.json({ randomUser: randomUser });
    });
};

module.exports.getAllUsers = (req, res) => {
    fs.readFile("users.json", "utf-8", function (err, data) {
        if (err) throw err;

        const allusers = JSON.parse(data);

        res.json({ allusers });
    });
};

module.exports.saveUser = (req, res) => {
    const user = req.body;

    if (
        !user?.id ||
        !user?.gender ||
        !user?.name ||
        !user?.contact ||
        !user?.address ||
        !user?.photoUrl
    ) {
        res
            .status(500)
            .send({ message: "required properties of the user is missing" });
        throw new Error("required properties of the user is missing");
    }

    fs.readFile("users.json", function (err, data) {
        const users = JSON.parse(data);
        users.push(user);
        console.log(users);
        fs.writeFile("users.json", JSON.stringify(users), (err) => {
            if (err) {
                console.log(err);
            }
            res.json({ message: "user has been added" });
        });
    });
};

module.exports.updateUser = (req, res) => {
    const { id, updatedUserData } = req.body;
    console.log(updatedUserData);

    /*

        {
         "id":3,
        "updatedUserData":{
        "address": "berlin" 
        }
        }

    */



    fs.readFile("users.json", "utf-8", function (err, data) {
        if (err) throw err;

        const allusers = JSON.parse(data);
        const userIndex = allusers.findIndex((user) => user.id === id);

        if (!userIndex) {
            res
                .status(500)
                .json({
                    message: "Cannot perform the change. Id is not found on the database",
                });
        }

        const userKey = Object.keys(updatedUserData);
        const userValue = updatedUserData[userKey[0]];

        allusers[userIndex][userKey] = userValue;

        fs.writeFile("users.json", JSON.stringify(allusers), (err) => {
            if (err) {
                console.log(err);
            }
            res.json({ message: "user update route" });
        });
    });
};

module.exports.bulkUpate = (req, res) => {

    /*
      [{"id": 3}, {"id": 4}]
    */


    const ids = req.body;
    if (Object.keys(ids).length === 0) {
        res.status(500).send({
            message: "Please put array of object with id property inside the body",
        });
    } else {
        fs.readFile("users.json", "utf-8", function (err, data) {
            if (err) throw err;

            const allusers = JSON.parse(data);
            ids.map((id) => {
                allusers.map((user) => {
                    if (id.id === user.id) {
                        console.log(user);
                        user.address = "changed";
                    }
                });
            });

            fs.writeFile("users.json", JSON.stringify(allusers), (err) => {
                if (err) {
                    console.log(err);
                }
                res.json({ message: "bulk user update route" });
            });
        });
    }
};

module.exports.deleteUser = (req, res) => {


    /*
    {
         "id":4
    }
    */
    const { id } = req.body;


    fs.readFile("users.json", "utf-8", function (err, data) {
        if (err) throw err;

        const allusers = JSON.parse(data);

       const user = allusers.filter(user => user.id == id);
       if(!user){
        res.status(500).send({ message: "id is not found on the database"})
       }else{

            const filteredUsers = allusers.filter(user => user.id !== id);

            fs.writeFile("users.json", JSON.stringify(filteredUsers), (err) => {
                if (err) {
                    console.log(err);
                }
                res.json({ message: "user has been deleted" });
            });


       }
      
       
    });







};
