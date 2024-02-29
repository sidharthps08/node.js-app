/*const createPost = (req,res,next) => {

    res.send('Hello from Node Js using Nodemon');
};

module.exports = {

    createPost
};*/

const express = require('express');
const router = express.Router();

// Setting up CSS styles with different non-gray colors and centered text
const styles = `
    <style>
        body {
            background-color: #ffeaa7; /* Light yellow */
            color: #2d3436; /* Dark gray */
            text-align: center; /* Center alignment */
            font-family: Arial, sans-serif; /* Change font family */
        }
        p {
            font-size: 20px; /* Increase font size */
            color: #6c5ce7; /* Change font color */
        }
    </style>
`;

router.get('/fe',(req,res,next) => {

    res.send(`${styles}<p>THE WEBPAGE IS DEVELOPED BY <strong><b>SIDHARTH P S</b></strong></p>`);
});

router.get('/admin', (req, res, next) =>{

    res.render('home',null);
});

module.exports = router;

ubuntu@ubuntu:~/node.js-app/routes$ 

