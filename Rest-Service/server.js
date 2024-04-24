const express = require("express")
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;

const data = [{ name: "hans", age: 17 }];

app.get("/people", (req, res) => {
    res.send(data);
})

app.post("/people", (req, res) => {
    console.log(req.body);

    res.send("thanks")
})
app.listen(port, () => {
    console.log("Server running on port " + port);
})
