const express = require("express");
const path = require("path");
const PORT = 3000
const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "login.html"));
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
})