import  express  from "express";
import cors from 'cors'
import router from './routes/router.js'

const app = express()
const port = 4000
// app.use(express.json())

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials : true
  })
  );
  app.use("/",router);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

