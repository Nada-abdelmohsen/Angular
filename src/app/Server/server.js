const express =require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const PORT=3001
const app=express();
app.use(bodyParser.json());

app.use(cors());
app.get('/',function(req,res){
    res.send("hello from node server")
})

app.listen(PORT,function(){
    console.log("Server running on port "+PORT)
})

app.post('/enroll',function(req,res){
    console.log(req.body);
    res.status(200).send({"data":"Recived successfully"})
})
