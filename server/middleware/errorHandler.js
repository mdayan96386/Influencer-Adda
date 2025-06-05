const { stack } = require("../routes/authRoute");

const errorHandler = (err, req, res, next) => {
  const code = res.statusCode <= 200 ? 500 : res.statusCode;
  res.status(code);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = errorHandler;
