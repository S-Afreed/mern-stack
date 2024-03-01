const express=require("express");
const app=express();

const static=express.static("static");

//Web Server
app.use("/",static);

//Api server 
app.get("/hi",(req,res)=>{
    //https://127.0.0.1:3000/hi?phone=123
    /**
     * host: 127.0.0.1
     * port: 3000
     * path: /hi
     * ?key=value
     */
    console.log(req.url);
    res.json({
        name: req.query.name="Afreed"
        //phone: req.query.phone=123
        
     });
});

app.listen(3500,()  => {
    console.log("app running");
});