const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.json({
        error: false,
        message: "Server up and running!."
    })
})

app.listen(3000, () => console.log("listning to port 3000"))