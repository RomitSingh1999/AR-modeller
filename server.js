const express= require("express")
const app=express()

const path= require("path")

app.set("/","html")
app.use(express.static(path.join(__dirname,"/")))
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('index')
});
app.get('/Arvison',(req,res)=>
{
    res.sendFile(path.join(__dirname+'/ARvisualisation.html'));
});


app.listen(3000,()=>{
    console.log("Listening port 3000")
})
