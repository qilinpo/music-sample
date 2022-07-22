import { Request, Response } from "express";
import https from "https"

type AudioUrlList = string[];

const audioList: AudioUrlList = [
  "https://github.com/qilinpo/music-sample/blob/main/pokemon-battle.mp3?raw=true",
];

export const rootHandler = (_req: Request, res: Response) => {
  return res.send("API is working");
};

export const audioHandler = (_req: Request, res: Response) => {
    const audioUrl: string = audioList[Math.floor(Math.random() * (audioList.length))];
    res.redirect(audioUrl);
}
