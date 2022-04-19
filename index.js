const express = require("express")

const serverPort = 8000
const app = express()

const robots = require("./data.js")

app.get("/robots", (req, res) => {
  const limit = parseInt(req.query.limit)

  console.log(req.query.limit)
  console.log(req.query.category)

  if (limit > 0 && limit <= robots.length) {
    const datas = []

    for (let i = 0; i < limit; i++) {
      datas.push(robots[i])
    }
    res.send(datas)
  } else {
    res.status(400).send("Out of range")
  }
})

app.get("/robots/:id", (req, res) => {
  const parsedId = parseInt(req.params.id)

  const robot = robots.find((robot) => robot.id === parsedId)

  if (robot) {
    res.send(robot)
  } else {
    res.status(404).send({ erroMessage: "Robot not found" })
  }
})

app.get("/", (req, res) => {
  console.log("Request received")
  res.send("Hello there !")
})

app.listen(serverPort, () => console.log("I'm ready !"))
