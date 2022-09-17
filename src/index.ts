import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "../dist/")));

app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`🚀 server started at http://localhost:${port}`);
});
