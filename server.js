const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

//book data
let books = [];

// Middleware for validation
const validateBook = (req, res, next) => {
    const { title, author, publisher, publishedDate, ISBN } = req.body;
    if (!title || !author || !publisher || !publishedDate || !ISBN) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    next();
};

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// GET a single book by ISBN
app.get('/books/:ISBN', (req, res) => {
    const book = books.find(b => b.ISBN === req.params.ISBN);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
});

// POST a new book
app.post('/books', validateBook, (req, res) => {
    const newBook = { ...req.body };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT (update) a book by ISBN
app.put('/books/:ISBN', validateBook, (req, res) => {
    const index = books.findIndex(b => b.ISBN === req.params.ISBN);
    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    books[index] = { ...req.body, ISBN: req.params.ISBN };
    res.json(books[index]);
});

// PATCH (partially update) a book by ISBN
app.patch('/books/:ISBN', (req, res) => {
    const index = books.findIndex(b => b.ISBN === req.params.ISBN);
    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    books[index] = { ...books[index], ...req.body };
    res.json(books[index]);
});

// DELETE a book by ISBN
app.delete('/books/:ISBN', (req, res) => {
    const index = books.findIndex(b => b.ISBN === req.params.ISBN);
    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    books.splice(index, 1);
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
