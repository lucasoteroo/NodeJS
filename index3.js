const express=require('express'); //"biblioteca, api"
const app=express();

app.get("/",function(req,res){  //pag 1
    res.send("lucas sotero")
});

app.get("/contato", function(req,res){ //pag2
    res.send("pagina de contato")
});

app.listen(8080); //porta
