"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware que transforma la req.body a un json
app.use(express_1.default.json());
// Todas las rutas estan en este app.use
app.use('/', routers_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
