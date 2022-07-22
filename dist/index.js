"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handlers_1 = require("./handlers");
const app = (0, express_1.default)();
const port = process.env.PORT || 8001;
app.get("/", handlers_1.rootHandler);
app.get("/audio", handlers_1.audioHandler);
app.listen(port, () => {
    return console.log(`Server is listing on ${port}`);
});
//# sourceMappingURL=index.js.map