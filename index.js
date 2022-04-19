const express = require("express")

const serverPort = 8000
const app = express()

app.get("/", (req, res) => {
  console.log("Request received")
  res.send("Hello there !")
})

app.listen(serverPort, () => console.log("I'm ready !"))
