const { user } = require("../config")
const userModel = require("../models/userModel")



exports.register = async(req, res)=>{
     try{
         let data = req.body
         let insert = await userModel.insertDetails(data)
         if(insert){
             return res.status(200).send({success: true , msg :"success", data: insert})
         }else{
            return res.status(200).send({success: true , msg :"wronng"})
         }
     }catch(err){
            return res.status(500).send({success:false , Error:err.message})
     }
}

exports.getUser = async(req, res)=>{
    try {
        let data = req.body
        let userData = await userModel.getUsersDetails(data)
        return res.status(200).send({status: true, msg:'success', data: userData})
    } catch (err) {
        return res.status(500).send({success:false , error:err.message})
    }
}

exports.getUserByName = async(req, res)=>{
    try {
        let data = req.query
        let getSpecificUser = await userModel.getSpecificUser(data.name)
        if(getSpecificUser.length == 0) return res.status(400).send({status: false, msg:'No User Found'})
        return res.status(200).send({status: true, msg:'success', data: getSpecificUser})
    } catch (err) {
        return res.status(500).send({success:false , error:err.message})
    }
}

exports.updateUser = async(req, res) =>{
    try {
        let data = req.query
        let reqData = req.body
        let user = await userModel.getSpecificUser(data.name)
        if(!user.length) return res.status(400).send({status: false, msg:'No User Found'})
        let  updateUser = await userModel.updateUserByName(reqData,data)
        return res.status(200).send({status: true, msg:'success', data: updateUser})
    } catch (err) {
        return res.status(500).send({success:false , error:err.message})
    }
}