const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/register',async(req,res)=>{
    res.render('auth/register');
})
router.get('/login',async(req,res)=>{
    res.render('auth/login');
})
module.exports = router;
