const express = require('express')
const app = express()
const debug = require('debug')('todo:app')
const chalk = require('chalk')

const config = require('./config')
const port = config.app.port

const {
  errorLogger,
  errorHandler,
  errorWrapper,
} = require('./utils/middlewares/ErrorHandler')

const tasksRouter = require('./routes/tasks')

app.use(express.json())

tasksRouter(app)

//Error Middlewares
app.use(errorLogger)
app.use(errorWrapper)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`${chalk.green('[API]')} listening on port ${port}`)
})
