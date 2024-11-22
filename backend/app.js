var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();  // This will load environment variables from the .env file

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Middleware for logging and parsing
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Allow cross-origin requests (CORS)
app.use(cors());

// Define routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// Export the app for Vercel serverless environment
module.exports = app;

// Add this to support serverless handling by Vercel
if (require.main === module) {
  const { createServer } = require('http');
  const { parse } = require('url');
  const server = createServer(app);

  server.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
}

