const express = require("express");
const app = express();
const controller = require("./controller.js");
const massive = require("massive");
require("dotenv").config();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING)
.then( db => {
    
    app.set("db", db);
    app.listen(SERVER_PORT, () => {console.log("Server active on port 4000")});
});



app.get("/api/inventory", controller.getAllItems);
app.post("/api/product", controller.addNewItem);
app.put("/api/inventory/:product_id", controller.editItem);
app.delete("/api/inventory/:product_id", controller.deleteItem);