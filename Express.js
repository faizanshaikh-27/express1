// npm init (package.json)
// npm install express --save (node module, package-lock.json)

const express = require("express");
const path = require("path");
const app = express();
const port = 2000;

// Custom Middleware
// const CustomMiddleware = (req, res, next) => {
//     console.log(req)
//     next()
// }
// app.use(CustomMiddleware)

// Default("/") page
app.use(express.static(path.join("/home/faizanshaikh/Desktop/Express/index.html")))

app.get("/hello/:name", (req, res) => {
    res.send("Hello World" +" "+req.params.name)
})

app.get("/about", (req, res) => {
    // res.send("This is about page")
    res.sendFile(path.join(__dirname, "index.html"))
    // res.status(200)
    // res.json({"Faizan": 27})
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
