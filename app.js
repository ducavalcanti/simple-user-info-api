const express = require("express");
const app = express();

app.get("/api/whoami", (req, res) => {
  console.log(req.headers);
  const json = {
    "ipaddress": req.headers["x-forwarded-for"],
    "language":  req.headers["accept-language"],
    "software":  req.headers["user-agent"],
    
  }
  res.json(json);
});

 module.exports = app;