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
    app.use((_req, res, next) => {
      // res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
      res.header('Access-Control-Allow-Origin', '*'); 
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
    });
    
    app.listen(PORT, ()=>{
      console.log(`Server listening on ${PORT}`)
    });

// app.use(express.json()); // Middleware que transforma la req.body a un json
// app.use(cors());
// app.use(router);

// app.listen(PORT, ()=>{
//     console.log(`Server listening on ${PORT}`)
// })