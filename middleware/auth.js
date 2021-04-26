const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'You are not logged in. Please login.' });
  }

  try {
    const cifrate = jwt.verify(token, process.env.JWT_SECRET);
    req.user = cifrate.user;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ msg: 'Your session has expired. Please login again' });
  }
};
