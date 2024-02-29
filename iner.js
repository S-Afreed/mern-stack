const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({
    name:"afreed",
    message: "Hello World! I am afreed."
  })
})

app.listen(3000,()=>
{
    console.log("app running")
});
