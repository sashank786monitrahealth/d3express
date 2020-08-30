// in this we need to use express 
// so that we can use the router from our router
const express = require('express');
const router = express.Router();

router.get('',(req,res,next) => {
    // we can use the render method in our response object
    // to render a specific page 
    // and pass necessary variables
    res.render('index')
})


// last thing we have to do is
// export the router

module.exports = router;