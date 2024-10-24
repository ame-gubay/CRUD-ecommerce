// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const itemRoutes = require('./routes/itemsRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes
app.use('/api/items', itemRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
