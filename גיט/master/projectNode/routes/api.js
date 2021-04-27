const router=require('express').Router();
const user=require('../controllers/user');
const image=require('../controllers/image');
const check = require('../middeleWere/check');

//User
router.post('/newUser',user.newUser);
router.get('/getUser/:name/:password', user.loginUser);
router.get('/updateUser', user.updateUser);
router.get('/getById/:userId', check.checkInUser, user.getById);
//Image
router.post('/createImage/:token',image.createImage);
router.delete('/deleteImage/:imageId',image.deleteImage);
router.get('/getImages/:token',image.getImages);


module.exports=router;