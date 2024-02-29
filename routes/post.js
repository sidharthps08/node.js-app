const express = require('express');
const router = express.Router();

router.get('/fe',(req,res,next) => {

	res.send('Hello from Node Js fe using Nodemon');
});

router.get('/home, (req, res, next) =>{

	res.render('home',null);
});

module.exports = router;







