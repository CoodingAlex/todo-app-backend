if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  dev: process.env.NODE_ENV !== 'production',
  app: {
    port: process.env.PORT || 3000,
  },
  mongo: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
}
