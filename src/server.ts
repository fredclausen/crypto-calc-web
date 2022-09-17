// Express server. ONLY USED for dev purposes
// This is why some paths are hard coded to dist
// and the dev build commands are the way they are. Production will be all
// statically served through nginx

import express from "express";
import path from "path";

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "../dist/")));

app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`🚀 server started at http://localhost:${port}`);
  console.log("Done");
});
