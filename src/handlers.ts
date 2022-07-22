import { Request, response, Response } from "express";
import fs from "fs";
import https from "https";

export const rootHandler = (_req: Request, res: Response) => {
  return res.send("API is working");
};

export const audioHandler = (_req: Request, res: Response) => {
  const audioList: string[] = [
    "https://raw.githubusercontent.com/qilinpo/music-sample/assets/sample-01.mp3",
    "https://raw.githubusercontent.com/qilinpo/music-sample/assets/sample-02.mp3",
    "https://raw.githubusercontent.com/qilinpo/music-sample/assets/sample-03.mp3",
  ];
  const audioUrl: string =
    audioList[Math.floor(Math.random() * audioList.length)];

  https.get(audioUrl, (response) => {
    res.set({
      "Content-Disposition": response.headers["content-disposition"],
      "Content-Type": response.headers["content-type"],
    });
    res.end()
  });
};
