const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.use(cors());

const port = process.env.PORT || 3000;

server.get("/api", (req, res) => {
  res.status(200).json({ api: "version 1" });
});

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
