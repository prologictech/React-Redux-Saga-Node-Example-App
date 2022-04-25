const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const db = require("./config/db");

// Connnect to database
db();

app.use(cors())
app.use(express.json());

app.use("/api/products", require("./routes/product"));

// Set static folder
app.use(express.static("client/build"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(root, "../client/build/index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
