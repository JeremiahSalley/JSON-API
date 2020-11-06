
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cowboys", { useNewUrlParser: true });
module.exports = mongoose;