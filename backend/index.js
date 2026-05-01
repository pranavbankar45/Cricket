import express from "express"
const app = express();
const PORT =3000;
app.use (express.json());


app.get('/',(req,res) => {
   console.log("got a request ");
   
})

app.listen(PORT,()=>{
    console.log("SERVER ARE STARTED AT PORT NO :",PORT);
})