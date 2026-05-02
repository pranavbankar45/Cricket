import express from "express"
import cors from "cors"

const app = express();
const PORT =3000;
app.use (express.json());
app.use(cors());


app.get('/',(req,res) => {
   console.log("got a request ");
})

app.get("/test",(req,res)=>{
    console.log("got a request at test route");
    res.json({message:"Hello from test route"});
})

app.listen(PORT,()=>{
    console.log("SERVER ARE STARTED AT PORT NO :",PORT);
})