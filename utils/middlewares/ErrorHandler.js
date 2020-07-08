const boom = require('@hapi/boom')
const config = require('../../config')

function errorWrapper(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation())
  }

  next(err)
}

function errorLogger(err, req, res, next) {
  if (config.dev) {
    console.error(err)
  }
  next(err)
}

function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err

  res.status(statusCode).json({ error: payload })
}

module.exports = {
  errorHandler,
  errorLogger,
  errorWrapper,
}
