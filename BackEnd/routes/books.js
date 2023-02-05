const express = require("express");
const router = express.Router();
const book = require("../models/book");

// Getting all
router.get("/", async (req, res) => {
  try {
    const books = await book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting the number of books
router.get("/count", async (req, res) => {
  try {
    const count = await book.countDocuments({});
    res.json([{ bookCount: count }]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get("/:id", getBook, (req, res) => {
  res.json(res.book);
});

// Getting borrowed books
router.get("/borrowedBooks", async (req, res) => {
  try {
    const booksn = await book.find();
    res.json(booksn);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating one
router.post("/", async (req, res) => {
  const inputingBook = new book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
  });

  try {
    const newBook = await inputingBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Updating one
router.patch("/:id", getBook, async (req, res) => {
  if (req.body.title != null) {
    res.book.title = req.body.title;
  }
  if (req.body.author != null) {
    res.book.author = req.body.author;
  }
  if (req.body.description != null) {
    res.book.description = req.body.description;
  }
  try {
    const changedBook = await res.book.save();
    res.json(changedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one
router.delete("/:id", getBook, async (req, res) => {
  try {
    await res.book.remove();
    res.json({ message: "Deleted book" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// middle where for the endpoints which have to pass the id as the parameter
async function getBook(req, res, next) {
  let newBook;
  try {
    newBook = await book.findById(req.params.id);
    if (newBook == null) {
      return res.status(404).json({ message: "Can not find book" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.book = newBook;
  next();
}

module.exports = router;
