import { addNewDownload, getDownloads, getDownload, updateDownload, deleteDownload } from '../Controller/usercontroller'
const { check, validationResult } = require('express-validator');
const routes = (app) => {
//     app.route('/sign_up')        
//         .post(addNewDownload)
 
//         const { check, validationResult } = require('express-validator');

app.post('/sign_up', [
    check('FirstName').isEmpty(),
    check('LastName').isEmpty(),
    check('Email').isEmail(),
    check('Password').isLength({ max: 8,min:5 })
], (req, res) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => res.json(user));
});

    // app.route('/download/:id')
    // .get(getDownloads)
    //     .get(getDownload)
    //     .put(updateDownload)
    //     .delete(deleteDownload)
}
 
export default routes