const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error -> ${err.message}`);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connected successfully");
});

const PORT = process.env.PORT || 3000;
app.set("port", PORT);

const server = app.listen(app.get("port"), () => {
  console.log(`Express server running on port ${server.address().port}`);
});
