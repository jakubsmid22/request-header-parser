const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

app.get("/api/whoami", (req, res) => {
  res.status(200).json({
    ipaddress: req.ip,
    language: req.get("Accept-Language"),
    software: req.get("User-Agent"),
  });
});

app.use((req, res) => {
    res.send("<h1>Unknown route</h1><a href='/'>Home</a>")
})

const listener = app.listen(PORT, () =>
  console.log("Server is listening on port " + PORT)
);
