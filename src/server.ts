import express from "express";
import http from "http";
import config from "./config";
import cors from "cors";
import registerController from "./controllers/registerController";
import mongoose from "mongoose";

const server = express();
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("Connected to DB");
    startServer();
  })
  .catch((error) => console.log(error));

//Only start server if Mongo connection is successfull
function startServer() {
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(cors());
  server.use(registerController);

  //Healthcheck route
  server.get("/ping", (req, res) => res.status(420).send("Pong"));

  http
    .createServer(server)
    .listen(config.port, () => console.log(`Server is running on port ${config.port}`));
}
