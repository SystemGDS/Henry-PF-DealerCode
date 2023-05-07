"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
// await sequelize.authenticate();
// console.log('Connection has been established successfully.');
app.use(express_1.default.json()); //middleware que transforma la req.body a un json
app.use((0, cors_1.default)());
app.use(routers_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
// app.use(express.json()); // Middleware que transforma la req.body a un json
// app.use(cors());
// app.use(router);
// app.listen(PORT, ()=>{
//     console.log(`Server listening on ${PORT}`)
// })
