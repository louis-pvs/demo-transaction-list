module.exports = (server, API_PORT = 3001) => {
  const jsonServer = require("json-server");
  const apiServerMiddleware = jsonServer.defaults();
  const router = jsonServer.router(require("./db.json"));

  server
    .use(apiServerMiddleware)
    .use("/api", router)
    .listen(API_PORT, () => {
      console.log(`API server is running at http://localhost:${API_PORT}`);
    });
};
