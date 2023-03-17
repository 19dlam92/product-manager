const express = require("express");
const app = express();
const port = 8000;


const mongoose = require("mongoose");
const db_name = "ProductManager"

mongoose.connect( `mongodb+srv://19dlam92:KAMIkazeazn92@cluster0.a97t2kg.mongodb.net/${ db_name }?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err))




app.get("/api/hello", (req, res) => {
    res.json({ msg: "hello world!" })
})






app.listen( port, () => console.log(`Listening on port: ${ port }`) );
// app.listen - runs the server