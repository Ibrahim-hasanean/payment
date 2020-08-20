const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/payment",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("mongoose connect");
  }
);
module.exports = mongoose;
