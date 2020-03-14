const express = require('express');
const router = express.Router();

// @route  Get api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res)=> {
    res.send('Get user conact');
});

// @route   Post api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res)=> {
    res.send('add contact');
});

// @route   Put api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res)=> {
    res.send('update contact');
});

// @route   delete api/contacts/:id
// @desc    Update contact
// @access  Private
router.delete('/:id', (req, res)=> {
    res.send('delete contact');
});



module.exports = router;