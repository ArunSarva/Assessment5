import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const DownloadSchema = new Schema({
    FirstName: {
        type: String,
        required: 'File Name required'
    },
    LastName: {
        type: String,
        required: 'File Name required'
    },
    Email: {
        type: String,
        required: 'File Name required'
    },
    Password: {
        type: String,
        required: 'File Name required'
    },
    ConfromPassword: {
        type: String,
        required: 'File Name required'
    },
    Created_at: {
        type: Date,
        required: 'File Name required'
    },
    Updated_at: {
        type: Date
    }
})
 
export default DownloadSchema;