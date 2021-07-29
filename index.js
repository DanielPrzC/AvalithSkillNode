const express = require("express");
const app = express();
const fs = require("fs").promises;

app.use(express.json());

//Endpoint N. 1
app.get("/date", (req, res) => {
    res.send(`Buen día, hoy es ${new Date()}`);
});

//Endpoint N. 2
app.get("/text", async (req, res) => {
    const text = await fs.readFile("./text.txt", "utf-8");
    res.send(text.toString());
});

//Endpoint N. 3
app.post("/greetings", (req, res) => {
    if (req.body.name !== "") {
        res.send(`Buen día ${req.body.name}`);
    } else {
        res.send("Please enter a name!")
    }
});




//Port listening
app.listen(3000, () => {
    console.log("The server has started on Port 3000.");
});