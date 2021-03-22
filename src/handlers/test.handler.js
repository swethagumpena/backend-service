const testHandler = (req, res) => res.status(200).json({
  user: req.user,
  message: 'Verified',
});

module.exports = { testHandler };
