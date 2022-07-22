import { Request, Response } from "express";
import { readdir } from "fs";

type AudioUrlList = string[];

export const rootHandler = (_req: Request, res: Response) => {
  return res.send("API is working");
};

export const audioHandler = (_req: Request, res: Response) => {
  readdir("./assets/", (err, files) => {
    if (err) return res.send(err.message);
    const audioList: AudioUrlList = files.map(
      (file) =>
        `https://github.com/qilinpo/music-sample/blob/main/assets/${file}?raw=true`
    );
    const audioUrl: string =
      audioList[Math.floor(Math.random() * audioList.length)];
    res.redirect(audioUrl);
  });
};
