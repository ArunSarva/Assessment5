import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const DownloadSchema = new Schema({
    FirstName: {
        type: String,
        required: 'First Name required'
    },
    LastName: {
        type: String,
        required: 'Last Name required'
    },
    Email: {
        type: String,
        required: 'Email required',
        unique: true,
        match:/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/        
    },
    Password: {
        type: String,
        required: 'Password required',
        match: /(?=.*[a-zA-Z0-9]).*/
    },
    ConfromPassword: {
        type: String,
        required: 'password not match',
    },
    Created_at: {
        type: Date,
        default:Date.now
        
    },
    Updated_at: {
        type: Date,
        default:Date.now
    }
})
 
export default DownloadSchema;
