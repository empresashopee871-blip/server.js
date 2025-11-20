const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname)); // deixa o HTML público

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Rodando na porta " + port));
