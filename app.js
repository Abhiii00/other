
const config = require('./config')
const express = require("express")

const {routes}= require ("./routes/routes")
const app = express();

app.use(express.json());


 app.get("/", function(req, res){
    res.send("node is running")
 })

 app.use("/",routes);


 if(module === require.main){
    var Server = app.listen(process.env.PORT || 3000 ,function (){
        var port = Server.address().port;
        console.log("App listening on port %s", port)
    })
 }
