require('dotenv').config()
const express = require("express");
const {connectToMongoDB} = require("./connect");
const urlRoute  = require("./routes/url");

const app = express();

app.use(express.json());
const port = 8000;
connectToMongoDB(process.env.DB_URL_MONGO)
.then(() => console.log("MongoDB connected."));

app.use("/url",urlRoute);
app.use("/",urlRoute);

app.listen(port,()=> console.log(`Server Started at PORT :${port}`))
