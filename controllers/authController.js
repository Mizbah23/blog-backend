const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  res.send("Register endpoint");
};

exports.login = async (req, res) => {
  res.send("Login endpoint");
};

