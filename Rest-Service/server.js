const express = require("express")

const app = express();
const port = 3000;

const data = [{ name: "hans", age: 17 },
{ name: "Sepp", age: 16 },
{ name: "Peter", age: 18 },
{ name: "Klaus", age: 19 },];

app.get("/people/:id", (req, res) => {
    let id = req.params.id;
    res.send(data[id]);
})

app.delete("/people/:id", (req, res) => {
    let id = req.params.id;
    data.splice(id, 1);
    res.send("done")
})
app.post("/people", (req, res) => {
    let person = req.body;
    people.push(person);
    res.send(person);
})

app.put("/people/:id/name", (req, res) => {
    let id = req.params.id;
    let newName = req.body.name;
    if (data[id]) {
        data[id].name = newName;
        res.send(data[id]);
    }
})
app.listen(port, () => {
    console.log("Server running on port " + port);
})
