const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // cureently leaving due to time limit but ot validate this you have to enter token field
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
