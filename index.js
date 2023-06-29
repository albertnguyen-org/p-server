const express = require("express");
const app = express();
const port = 8081; 

app.get("/", (req, res)=>{
    res.end("Hello World");
});

app.get("/trigger", (req, res)=>{
    console.log("Triggering event");
    res.end("SUCCESS");
})

const server = app.listen(port, function(){
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
}) 



