/*const createPost = (req,res,next) => {

    res.send('Hello from Node Js using Nodemon');
};

module.exports = {

    createPost
};*/

const express = require('express');
const router = express.Router();

// Setting up CSS styles with different non-gray colors
const styles = `
    <style>
        body {
            background-color: #ffeaa7; /* Light yellow */
            color: #2d3436; /* Dark gray */
        }
    </style>
`;

router.get('/',(req,res,next) => {

    res.send(`${styles}<p>The webpage is developed by <strong>sidharthps</strong></p>`);
});

router.get('/home', (req, res, next) =>{

    res.render('home',null);
});

module.exports = router;

