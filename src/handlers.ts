import { Request, Response } from "express";
import https from "https"

type AudioUrlList = string[];

const audioList: AudioUrlList = [
  "https://github.com/qilinpo/music-sample/blob/main/assets/sample-01.mp3?raw=true",
  "https://github.com/qilinpo/music-sample/blob/main/assets/sample-02.mp3?raw=true",
  "https://github.com/qilinpo/music-sample/blob/main/assets/sample-03.mp3?raw=true",
];

export const rootHandler = (_req: Request, res: Response) => {
  return res.send("API is working");
};

export const audioHandler = (_req: Request, res: Response) => {
    const audioUrl: string = audioList[Math.floor(Math.random() * (audioList.length))];
    res.redirect(audioUrl);
}
