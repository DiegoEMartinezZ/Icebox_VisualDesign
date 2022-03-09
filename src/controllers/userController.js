const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const path = require('path');

module.exports = {
  register: (req, res) => {
    return res.render('./user/register');
  },

  login: (req, res) => {
    return res.render('./user/login');
  },
};
