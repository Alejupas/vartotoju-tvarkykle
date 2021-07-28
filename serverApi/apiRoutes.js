const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');

router.post('/addNewUser', async (req, res) => {
  const newUser = new User(req.body);
  try {
    const rez = await newUser.save();
    res.json(rez);
  } catch (err) {
    res.status(500).json();
  }
});

router.get('/allUsers', async (req, res) => {
  try {
    const getAllUsers = await User.find();
    res.json(getAllUsers);
  } catch (err) {
    console.log('error catching /allUsers');
  }
});

module.exports = router;
