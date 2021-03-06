const mongoose = require("mongoose");

const config = require("config");
let db;
if (process.env.NODE_ENV === "production") {
  db = config.get("serverMongoURI");
} else {
  db = config.get("localMongoURI");
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'demo'
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
