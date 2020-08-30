// in this we need to use express 
// so that we can use the router from our router
const express = require('express');
const router = express.Router();
const pages = require('./pages')

pages.map(page => {
    router.get(page.location,(req,res,next) => {
        // we can use the render method in our response object
        // to render a specific page 
        // and pass necessary variables
        const p = page.page ? page.page : 'viz';
        res.render(p, {script:`/js/${page.file}.js`, style:`/css/${page.file}.css`});
    })
})
//create many projects- where each of the projects live on a separate route
// map through the array that holds all the information
// we will be populating that array as we  go on
// but here in index.js we wont have to touch this at all
/*
router.get('',(req,res,next) => {
    // we can use the render method in our response object
    // to render a specific page 
    // and pass necessary variables
    res.render('index')
})
*/

// last thing we have to do is
// export the router

module.exports = router;