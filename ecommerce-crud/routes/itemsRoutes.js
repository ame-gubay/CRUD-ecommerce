// routes/itemsRoutes.js
const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// CRUD routes
router.get('/', itemsController.getAllItems);          // Get all items
router.get('/:id', itemsController.getItemById);       // Get item by ID
router.post('/', itemsController.createItem);          // Create a new item
router.put('/:id', itemsController.updateItem);        // Update an item by ID
router.delete('/:id', itemsController.deleteItem);     // Delete an item by ID

module.exports = router;
