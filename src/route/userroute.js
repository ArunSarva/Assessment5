import { addNewDownload, getDownloads, getDownload, updateDownload, deleteDownload } from '../Controller/usercontroller'
const { check, validationResult } = require('express-validator');
var passwordValidator = require('password-validator');
import * as EmailValidator from 'email-validator';

 
var passwordHash = require('password-hash');
const routes = (app) => {
//     app.route('/sign_up')        
//         .post(addNewDownload)
 
//         const { check, validationResult } = require('express-validator');

app.post('/sign_up', [    
  // check(req.body.Email).isEmail(),
  // check(req.body.Password).isLength({ max: 8})
], addNewDownload,async(req, res,next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  User.create({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Password: req.body.Password,
    ConfromPassword: req.body.ConfromPassword,
    Created_at: req.body.Created_at,
    Updated_at:req.body.Updated_at

  }).then(User => res.json(User));
});
// to get all data 
app.route('/sign_up')
.get(getDownloads)
    //     .get(getDownload)
    //     .put(updateDownload)
    //     .delete(deleteDownload)
}
export default routes