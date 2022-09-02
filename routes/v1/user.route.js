const express = require('express');
const userController = require('../../controllers/user.controller');


const router = express.Router();


router.route('/random').get(userController.getRandomUser);

router.route('/all').get(userController.getAllUsers);

router.route('/save').post(userController.saveUser);

router.route('/update').patch(userController.updateUser);

router.route('/bulk-update').patch(userController.bulkUpate);

router.route('/delete').delete(userController.deleteUser);



module.exports = router;