"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//config the .env file
dotenv_1.default.config();
//create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//define first Route of APP
app.get('/hello', (req, res) => 
//send hello world
res.send('welcome yo GET route: !Hello!'));
//execute APP and listen Request to PORT
app.listen(port, () => console.log(`EXPRESS SERVER: Running at http://localhost:${port}`));
//# sourceMappingURL=index.js.map