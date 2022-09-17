import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 5000;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`🚀 server started at http://localhost:${port}`);
});
