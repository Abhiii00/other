const express = require("express");
const router = express.Router();




 let userController = require('../controllers/userController')
// const { user } = require('../config')


 router.post('/registerUser',userController.register.bind())
 router.get('/user',userController.getUser.bind())
 router.get('/getSpecificUser',userController.getUserByName.bind())
 router.post('/updateUser',userController.updateUser.bind())
 router.post('/loginUser',userController.loginUser.bind())

 router.get("/me", function (req, res) {
    return res.status(200).send({ success: true, msg: "Successfull api hit" });
  });





  module.exports.routes = router;