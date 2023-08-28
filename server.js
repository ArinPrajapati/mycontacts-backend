const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();


connectDB();
const app = express();

const port = process.env.PORT || 5400;

app.use(express.json()); //... is need to send data to body

app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/user", require("./routes/user"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
