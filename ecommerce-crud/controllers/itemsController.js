// controllers/itemsController.js
const db = require('../db');

// Get all items
exports.getAllItems = (req, res) => {
    const query = 'SELECT * FROM items';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Get a single item by ID
exports.getItemById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM items WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(result[0]);
    });
};

// Create a new item
exports.createItem = (req, res) => {
    const { name, description, price, stock } = req.body;
    const query = 'INSERT INTO items (name, description, price, stock) VALUES (?, ?, ?, ?)';
    db.query(query, [name, description, price, stock], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Item created', itemId: result.insertId });
    });
};

// Update an existing item by ID
exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;
    const query = 'UPDATE items SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?';
    db.query(query, [name, description, price, stock, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item updated' });
    });
};

// Delete an item by ID
exports.deleteItem = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM items WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted' });
    });
};
