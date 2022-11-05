const logger = (req,res,next) =>{
    const method = req.method;
    const url = request.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    // res.send('Testing')
    next()
}

module.exports = logger