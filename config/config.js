const whitelist = ['http://localhost:8080', 'http://localhost:8081']

module.exports = {
  corsOptions: {
    credentials: true,
    origin(origin, callback) {
      console.log('cors:', origin)
      if (origin === undefined || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
  },
}
