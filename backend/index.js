const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("dist"));

const Entry = require("./models/entry");

// Homepage
app.get("/", (req, res) => res.send("<h1>Gymrat Home</h1>"));

// Get all entries
app.get("/api/entries", (req, res, next) => {
  Entry.find({})
    .then((entries) => res.json(entries))
    .catch((error) => next(error));
});

// Add new entry
app.post("/api/entries", (req, res, next) => {
  const body = req.body;

  const entry = new Entry({
    date: body.date,
    title: body.title,
    note: body.note,
  });

  entry
    .save()
    .then((savedEntry) => res.json(savedEntry))
    .catch((error) => next(error));
});

// Update existed entry
app.put("/api/entries/:id", (req, res, next) => {
  const body = req.body;

  const entry = {
    date: body.date,
    title: body.title,
    note: body.note,
  };

  Entry.findByIdAndUpdate(req.params.id, entry, { new: true })
    .then((changedEntry) => res.json(changedEntry))
    .catch((error) => next(error));
});

// Remove existed entry
app.delete("/api/entries/:id", (req, res, next) =>
  Entry.findByIdAndDelete(req.params.id)
    .then((result) => res.status(204).end())
    .catch((error) => next(error))
);

const errorHandler = (error, req, res, next) => {
  console.log(error);
  next(error);
};

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
