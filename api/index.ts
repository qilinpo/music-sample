import express from "express";
import { rootHandler, audioHandler } from "./handlers";

const app = express();

const port = process.env.PORT || 8001;

app.get("/", rootHandler);
app.get("/audio", audioHandler);

app.listen(port, () => {
  return console.log(`Server is listing on ${port}`);
});
