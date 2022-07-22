import { Request, Response } from "express";
import { createReadStream, readdir } from "fs";

export const rootHandler = (_req: Request, res: Response) => {
  return res.send("API is working");
};

export const audioHandler = (_req: Request, res: Response) => {
  readdir("./assets/", (err, files) => {
    if (err) return res.send(err.message);
    const audioList: string[] = files.map((file) => `./assets/${file}`)
    const audioFilename: string =
      audioList[Math.floor(Math.random() * audioList.length)];

    const readStream = createReadStream(audioFilename);


    readStream.on("open", function () {
      readStream.pipe(res);
    });

    readStream.on("error", function (err) {
      res.end(err);
    });
  });
};
