"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioHandler = exports.rootHandler = void 0;
const fs_1 = require("fs");
const rootHandler = (_req, res) => {
    return res.send("API is working");
};
exports.rootHandler = rootHandler;
const audioHandler = (_req, res) => {
    (0, fs_1.readdir)("./assets/", (err, files) => {
        if (err)
            return res.send(err.message);
        const audioList = files.map((file) => `https://github.com/qilinpo/music-sample/blob/main/assets/${file}?raw=true`);
        const audioUrl = audioList[Math.floor(Math.random() * audioList.length)];
        res.redirect(audioUrl);
    });
};
exports.audioHandler = audioHandler;
//# sourceMappingURL=handlers.js.map