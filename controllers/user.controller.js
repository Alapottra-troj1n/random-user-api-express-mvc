const fs = require('fs');

module.exports.getRandomUser = (req, res) => {

    fs.readFile('users.json', 'utf-8', function (err, data) {
        if (err) throw err;


        const allusers = JSON.parse(data);

        const randomNumber = Math.floor(Math.random() * allusers.length); + 1
        const randomUser = allusers[randomNumber];

        res.json({ randomUser: randomUser });



    });


}

module.exports.getAllUsers = (req, res) => {

    fs.readFile('users.json', 'utf-8', function (err, data) {
        if (err) throw err;


        const allusers = JSON.parse(data);

        res.json({ allusers })



    });


}


module.exports.saveUser = (req, res) => {

    const  user  = req.body;

    if (!user?.id || !user?.gender || !user?.name || !user?.contact || !user?.address || !user?.photoUrl) {
        res.status(500).send({ message : 'required properties of the user is missing'});
        throw new Error('required properties of the user is missing');
    }


    fs.readFile('users.json', function (err, data) {

        const users = JSON.parse(data)
        users.push(user);
        console.log(users);
        fs.writeFile("users.json", JSON.stringify(users), (err) => {
            if(err){
                console.log(err);
            }
            res.json({ message: 'user has been added' })
        })
       
    })



}


module.exports.updateUser = (req, res) => {
    res.json({ message: 'user updated' })
}



module.exports.bulkUpate = (req, res) => {
    res.json({ message: 'users bulk update' })
}


module.exports.deleteUser = (req, res) => {
    res.json({ message: 'user delete' })
}
