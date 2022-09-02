module.exports.getRandomUser = (req, res) => {
    res.json({message: 'random user'})
}

module.exports.getAllUsers = (req, res) => {
    res.json({message: 'all users'})
}


module.exports.saveUser = (req, res) => {
    res.json({message: 'user save route'})
}


module.exports.updateUser = (req, res) => {
    res.json({message: 'user updated'})
}



module.exports.bulkUpate = (req, res) => {
    res.json({message: 'users bulk update'})
}


module.exports.deleteUser = (req, res) => {
    res.json({message: 'user delete'})
}
