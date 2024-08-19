// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Create server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Read comments from file
const readComments = () => {
    const comments = fs.readFileSync(path.join(__dirname, 'comments.json'), 'utf8');
    return JSON.parse(comments);
}

// Read comments from file
const writeComments = (comments) => {
    fs.writeFileSync(path.join(__dirname, 'comments.json'), JSON.stringify(comments));
}

// Get comments
app.get('/api/comments', (req, res) => {
    const comments = readComments();
    res.json(comments);
});

// Add comments
app.post('/api/comments', (req, res) => {
    const comments = readComments();
    comments.push(req.body);
    writeComments(comments);
    res.json(comments);
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});