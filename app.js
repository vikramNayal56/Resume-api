const express = require("express");
const routes = require("./Resume-api/routes");

const app = express();

app.use(express.json());

app.use("/api",routes);

// start the server
app.listen(3000,()=> {
    console.log("server running on http://localhost:3000");
})