const express = require('express')
const app = express()

// req => middleware => res

const logger = (req,res,next) =>{
    const method = req.method;
    const url = request.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    // res.send('Testing')
    next()
}

app.get('/',logger,(req,res)=>{

    res.send('Home')
})

app.get('/about',logger, (req,res)=>{
    res.send('About')
})


app.listen(500,()=>{
    console.log('Server is listening on port 5000...');
})