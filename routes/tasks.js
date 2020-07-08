const express = require('express')
const router = express.Router()

const TasksService = require('../services/tasks')
const tasksService = new TasksService()

function tasksRouter(app) {
  app.use('/api', router)

  router.get('/tasks', async (req, res, next) => {
    try {
      const data = await tasksService.getTasks()
      res.status(200).json({ message: 'tasks getted', data })
    } catch (err) {
      next(err)
    }
  })

  router.get('/tasks/:taskId', async (req, res, next) => {
    try {
      const { taskId } = req.params
      const data = await tasksService.getTask(taskId)
      res.status(200).json({ message: 'task getted', data })
    } catch (err) {
      next(err)
    }
  })

  router.post('/tasks', async (req, res, next) => {
    try {
      const { title, description } = req.body
      const task = {
        title,
        description,
        completed: false,
      }
      const data = await tasksService.createTask(task)
      res.status(201).json({ message: 'task created', data })
    } catch (err) {
      next(err)
    }
  })

  router.put('/tasks/:taskId', async (req, res, next) => {
    try {
      const { taskId } = req.params
      const task = req.body
      const data = await tasksService.updateTask(taskId, task)
      res.status(200).json({ message: 'task created', data })
    } catch (err) {
      next(err)
    }
  })

  router.delete('/tasks/:taskId', async (req, res, next) => {
    try {
      const { taskId } = req.params
      const data = await tasksService.deleteTask(taskId)
      res.status(200).json({ message: 'task deleted', data })
    } catch (err) {
      next(err)
    }
  })
}

module.exports = tasksRouter
