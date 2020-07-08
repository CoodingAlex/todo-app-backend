const Mongo = require('../lib/Mongo')
const { ObjectId } = require('mongodb')

const db = new Mongo()

const COLLECTION = 'tasks'

class TasksService {
  async getTasks(user) {
    try {
      const query = user ? { user } : {}
      const data = await db.find(COLLECTION, query)
      return data
    } catch (err) {
      throw new Error(err)
    }
  }
  async getTask(id) {
    try {
      const data = await db.findOne(COLLECTION, { _id: ObjectId(id) })
      return data
    } catch (err) {
      throw new Error(err)
    }
  }
  async createTask(task) {
    try {
      const data = await db.insertOne(COLLECTION, task)
      return data
    } catch (err) {
      throw new Error(err)
    }
  }
  async updateTask(id, task) {
    try {
      const data = await db.updateOne(COLLECTION, id, task)
      return data
    } catch (err) {
      throw new Error(err)
    }
  }
  async deleteTask(id) {
    try {
      const data = await db.removeOne(COLLECTION, { _id: ObjectId(id) })
      return data
    } catch (err) {
      throw new Error(err)
    }
  }
}

module.exports = TasksService
