const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .select('-__v')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .select('-__v')
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
      )
      .select('-__v')
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndRemove({ 
      _id: req.params.userId 
    })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'No User with this id!' });
      }
      res.json({ message: 'User successfully deleted!' });
    })
    .catch((err) => res.status(500).json(err));
  },

  
};
