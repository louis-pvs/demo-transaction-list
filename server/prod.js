const path = require("path");
const express = require("express");
const proxy = require("http-proxy-middleware");

// configure server port:
const PORT = process.env.PORT || 3000;
const API_PORT = process.env.API_PORT || 3001;

const DIST_DIR = path.join(__dirname, "../client");
const HTML_FILE = path.join(DIST_DIR, "/index.html");

// create app instance
const app = express();

app
  .use(express.static(DIST_DIR))
  // pointing to the correct proxy
  .use(
    "/api",
    proxy({ target: `http://localhost:${API_PORT}`, changeOrigin: true })
  )
  .use("*", (_, res) => res.sendFile(HTML_FILE))
  .listen(PORT, () => {
    console.log(`App listening to ${PORT}`);
    console.log("Press Ctrl+C to quit");
  });

// start a server to mock database
const apiServer = express();
require("./mockDbServer")(apiServer, API_PORT);
