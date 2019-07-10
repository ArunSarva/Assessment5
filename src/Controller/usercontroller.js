import mongoose from 'mongoose'
import downloadSchema from '../models/usermodel'
 
const Download = mongoose.model('Download', downloadSchema)
 
// add new download to the database
exports.addNewDownload=(req, res)=> {
    console.log("hi")
    let newDownload = new Download(req.body)
    newDownload.save((error, download) => {
        if (error) { res.json(error) }
        res.json(download)

    })
    console.log(req.body.fileName);
}
 
// get all downloads from the database
// exports.getDownloads=(req, res)=> {
//     let newDownload = new Download(req.body)
//     Download.find({}, (error, downloads) => {
//         if (error) { res.json(error) }

//         // console.log(req.body.fileName)
//         res.json(downloads.fileName)

//     })
//     console.log(req.body.fileName)
// }
 
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