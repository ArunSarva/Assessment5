import mongoose from 'mongoose'
import downloadSchema from '../models/usermodel'
import * as EmailValidator from 'email-validator';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const Download = mongoose.model('Download', downloadSchema)
var validator = require("email-validator");

exports.addNewDownload=(req, res)=> {
    console.log("post hi")
    console.log(req.body.FirstName)
    const reg= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;
    if(reg.test(req.body.Password))
    {
        console.log(reg.test(req.body.Password))
        if(req.body.Password === req.body.ConfromPassword){
        req.body.Password = cryptr.encrypt(req.body.Password);
        req.body.ConfromPassword = cryptr.encrypt(req.body.ConfromPassword);
    }else{
        req.body.Password ="";
    }
}  
    console.log(reg.test(req.body.Password))

    let newDownload = new Download(req.body)
   
    newDownload.save((error, download) => {
        if (error) { res.json(error) }
        res.json("User created successfully")
    })


    // console.log(req.body.fileName);
}
// get all downloads from the database
exports.getDownloads=(req, res)=> {
    console.log("get hi")
    let newDownload = new Download(req.body)
    Download.find({}, (error, downloads) => {
        if (error) { res.json(error) }
        res.json(downloads)
    })
}
 
// get single download based on the id
exports.getLogin=(req, res)=> {
    Download.find(req.body.Email,req.body.Password, (error, download) => {
        console.log(req.body.Email)
        if (error) { res.json(error) }
        res.json("Successfuly login")
    })
}
// exports.getLogin = (req,res,next) =>{
//     Download.findOne({Email: Email})
//     .then(user =>{
//     if(bcrypt.compare(req.body.Password,user.Password)&& bcrypt.compare(req.body.Email,user.Email)){
//     res.status(200).json({
//     message: 'succesfuly login',
//     })
//     }
//     }) 
//     }
 
// // update the download information based on id
// export function updateDownload(req, res) {
//     Download.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, download) => {
//         if (error) { res.json(error) }
//         res.json(download)
//     })
// }
 
// // delete the download from the database.
// export function deleteDownload(req, res) {
//     Download.remove({ _id: req.params.id }, (error, download) => {
//         if (error) { res.json(error) }
//         res.json(download)
//     })
// }