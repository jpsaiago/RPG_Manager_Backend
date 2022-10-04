import express from "express";
import http from "http";
import config from "./config";
import cors from "cors";

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => res.send("Hello!"));

http
  .createServer(server)
  .listen(config.port, () => console.log(`Server is running on port ${config.port}`));
