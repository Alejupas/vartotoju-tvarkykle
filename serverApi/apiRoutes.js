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

router.delete('/deleteUser/:id', async (req, res) => {
  try {
    const deleteResult = await User.findByIdAndDelete(userToDeleteId);
    res.json(deleteResult);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/editUser/:id', async (req, res) => {
  const { userName, age, email } = req.body;
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      userName,
      age,
      email,
    }
  );
  res.send({
    success: true,
    message: `User ${userName} edited and updated successfully`,
  });
});

module.exports = router;
