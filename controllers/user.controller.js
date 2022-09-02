const fs = require('fs');

module.exports.getRandomUser = (req, res) => {

     fs.readFile('users.json','utf-8' ,function (err, data) {
        if (err) throw err;

        
        const allusers = JSON.parse(data);

        const randomNumber = Math.floor(Math.random() * allusers.length); + 1
        const randomUser = allusers[randomNumber];

        res.json({randomUser : randomUser});

       
        
    });


}

module.exports.getAllUsers = (req, res) => {

    fs.readFile('users.json','utf-8' ,function (err, data) {
        if (err) throw err;

        
        const allusers = JSON.parse(data);

        res.json({allusers})

       
        
    });

   
}


module.exports.saveUser = (req, res) => {
    res.json({ message: 'user save route' })
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
