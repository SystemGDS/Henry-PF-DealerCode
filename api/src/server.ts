import "dotenv/config";
import express from "express";
import router  from "./routers"
import cors from "cors"

const PORT = process.env.PORT || 3001;
const app = express();

    // await sequelize.authenticate();
    // console.log('Connection has been established successfully.');
            
    app.use(express.json());//middleware que transforma la req.body a un json
    app.use(cors());
    
    app.use("/",router);
    
    app.listen(PORT, ()=>{
      console.log(`Server listening on ${PORT}`)
    });

// app.use(express.json()); // Middleware que transforma la req.body a un json
// app.use(cors());
// app.use(router);

// app.listen(PORT, ()=>{
//     console.log(`Server listening on ${PORT}`)
// })