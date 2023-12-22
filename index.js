require('dotenv').config()
const express = require("express");
const {connectToMongoDB} = require("./connect");
const urlRoute  = require("./routes/url");
const app = express();
const port = 8001;
connectToMongoDB(process.env.DB_URL_MONGO)
.then(() => console.log("MongoDB connected."));
app.use(express.json)
app.use("/url",urlRoute);

app.listen(port,()=> console.log(`Server Started at PORT :${port}`))
