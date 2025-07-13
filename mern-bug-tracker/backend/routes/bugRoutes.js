const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');

// @route   POST /api/bugs
// @desc    Create a new bug
router.post('/', async (req, res) => {
  const { title, status } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const newBug = new Bug({ title, status: status || 'open' });
    const savedBug = await newBug.save();
    res.status(201).json(savedBug);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create bug', error: error.message });
  }
});

// @route   GET /api/bugs
// @desc    Get all bugs
router.get('/', async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bugs', error: error.message });
  }
});

// @route   PUT /api/bugs/:id
// @desc    Update bug status or title
router.put('/:id', async (req, res) => {
  const { title, status } = req.body;

  try {
    const updatedBug = await Bug.findByIdAndUpdate(
      req.params.id,
      { title, status },
      { new: true }
    );

    if (!updatedBug) {
      return res.status(404).json({ message: 'Bug not found' });
    }

    res.json(updatedBug);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update bug', error: error.message });
  }
});

// @route   DELETE /api/bugs/:id
// @desc    Delete a bug
router.delete('/:id', async (req, res) => {
  try {
    const deletedBug = await Bug.findByIdAndDelete(req.params.id);

    if (!deletedBug) {
      return res.status(404).json({ message: 'Bug not found' });
    }

    res.json({ message: 'Bug deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete bug', error: error.message });
  }
});

module.exports = router;
