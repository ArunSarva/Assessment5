import mongoose from 'mongoose'
import downloadSchema from '../models/usermodel'
import * as EmailValidator from 'email-validator';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const Download = mongoose.model('Download', downloadSchema)
 
// add new download to the database
// exports.addNewDownload=(req, res)=> {
//     console.log("post hi")
//     let newDownload = new Download(req.body)
//     newDownload.save((error, download) => {
//         if (error) { res.json(error) }
//         res.json(download)
//     })
//     // console.log(req.body.fileName);
// }
module.exports.createUser = function(newUser, callback){
bcrypt.genSalt(10, function(err, salt) {
bcrypt.hash(newUser.password, salt, function(err, hash) {
newUser.password = hash;
newUser.save(callback);
});
});
}
var validator = require("email-validator");



exports.addNewDownload=(req, res)=> {
    console.log("post hi")
    console.log(req.body.FirstName)
    const reg= /(?=.*[a-zA-Z0-9]).*/;
    if(reg.test(req.body.Password))
    {
        req.body.Password = cryptr.encrypt(req.body.Password);
        req.body.ConfromPassword = cryptr.encrypt(req.body.ConfromPassword);

    }

     else if (req.body.Password!= req.body.ConfromPassword) {
        req.body.ConfromPassword="";
     }
     
    let newDownload = new Download(req.body)
   
    newDownload.save((error, download) => {
        if (error) { res.json(error) }
        res.json(download)
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
 
// // get single download based on the id
// exports.getDownload=(req, res)=> {
//     Download.findById(req.params.id, (error, download) => {
//         if (error) { res.json(error) }
//         // console.log(req.body.downloads.firstName)
//         res.json(download)
//     })
// }
 
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