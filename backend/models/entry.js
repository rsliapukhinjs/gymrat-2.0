const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error.message));

const entrySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    minLength: 3,
    required: true,
  },
  note: {
    type: String,
    minLength: 3,
    required: true,
  },
});

entrySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
