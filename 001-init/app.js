const express = require('express');
const expressHbs = require('express-handlebars');

const path = require('path');
const routes = require('./routes/index');
const port = 3000;

// instantiate an application by calling express as 
// a method and assigning to a variable app.
const app = express();
app.engine('.hbs', expressHbs({defaultLayout:'layout', extname:'.hbs'}))
app.set('view engine','.hbs')
app.set('views', path.join(__dirname,
    'views'))
// once we have the application object - we need to tell it to listen to GET
// requests on various paths.

// we are going to let our app use that routes module that we just 
// imported to do so.
app.use('/',routes);

app.listen(port, () => console.log(`Listening on port ${port}!`))

app.use((req,res,next)=>{
    const err = new Error('Not Found')
    err.status = 404;
    next(err)
})

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
})
module.exports = app;