const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("room");
});

app.get("/:room", (req, res) => {
  res.render("room", { roomID: req.params.room });
});

server.listen(3030);
