const express = require("express")
const db = require("./database")
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = 3001;

const data = [{ name: "hans", age: 17 },
{ name: "Sepp", age: 16 },
{ name: "Peter", age: 18 },
{ name: "Klaus", age: 19 },];

app.get("/people", async function (req, res) {
    try {
        let result = await db.query("select * from people")
        res.send(result);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

app.delete("/people", async (req, res) => {
    let id = req.params.id;
    data.splice(id, 1);
    res.send("done")
})
app.post("/people", async function (req, res) {

    let person = req.body;
    console.log(person);
    let sql = "insert into people (firstname, lastname) values(?,?)";
    try {
        let result = await db.query(sql, [person.firstname, person.lastname])
        res.send(result);
    } catch (error) {
        res.status(404).send(error.message);
    }
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
