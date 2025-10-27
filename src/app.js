const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Import routes
const postRoutes = require('./routes/postRoutes');

// Use routes
app.use('/api/posts', postRoutes);

// Main routes - TODO: Implement these routes
app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/posts', (req, res) => {
    res.render('pages/posts');
});

app.get('/posts/add', (req, res) => {
    res.render('pages/add-post');
});

app.get('/posts/edit/:id', (req, res) => {
    res.render('pages/edit-post', { postId: req.params.id });
});

app.get('/posts/search', (req, res) => {
    res.render('pages/search-posts');
});

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Post Management App is running!',
        timestamp: new Date().toISOString(),
        templateEngine: 'EJS',
        architecture: 'MVC'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Post Management App is running on http://localhost:${PORT}`);
    console.log(`Static files served from: ${path.join(__dirname, '..', 'public')}`);
    console.log(`Architecture: MVC with EJS templates`);
});

module.exports = app;