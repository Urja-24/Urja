const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  console.log("Console active  ");
  res.send("Hello World");
});

app.use(express.json());
app.use("/api/player", require("./routes/authRoutes"));

app.listen(3080, () => {
  console.log("Server is running on port 3080");
});


// app.post("/api/verifyToken", verifyToken);
// // app.use("/api/search", tokenCheck, searchRouter);

// app.use("/api/search", searchRouter);
// // app.use("/api/upload", tokenCheck, require("./routes/uploadRoutes"));
// app.use("/api/upload", require("./routes/uploadRoutes"));