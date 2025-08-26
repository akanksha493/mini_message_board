const express = require('express');
const path = require('path');

const app = express();

const indexRouter = require('./routes/indexRouter');

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");

// top level middleware 
app.use(express.urlencoded({extended:true}));



// adding routers 
app.use('/', indexRouter);



const PORT = process.env.PORT || 3000;
app.listen(PORT, (error)=>{
    if(error) console.log(error);
    else console.log(`server is running at http://localhost:${PORT}`);
})