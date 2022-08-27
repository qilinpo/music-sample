import { Request, Response } from "express";
import https from "https";
const fetch = require("node-fetch");

type GitFile = {
  path: string;
  mode: string;
  type: string;
  size: number;
  url: string;
};

type GitTree = {
  tree?: GitFile[];
};

const githubUrl =
  "https://api.github.com/repos/qilinpo/music-sample/git/trees/assets?recursive=1";


const audioHandler = async (_req: Request, res: Response) => {
  let audioList: string[] = [];
  try {
    const resp = await fetch(githubUrl);
    const json: GitTree = await resp.json();
    const tree: GitFile[] = json?.tree;

    tree.forEach(({ path }) => {
      if (path.startsWith("sample-")) {
        audioList.push(
          `https://raw.githubusercontent.com/qilinpo/music-sample/assets/${path}`
        );
      }
    });

    const audioUrl: string =
      audioList[Math.floor(Math.random() * audioList.length)];

    https.get(audioUrl, (response) => {
      response.pipe(res);
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default audioHandler
