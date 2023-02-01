require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
// mongoose.set('strictQuery', false);
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const booksRouter = require("./routes/books");
app.use("/books", booksRouter);

app.listen(3000, () => {
  console.log("Server started");
});
