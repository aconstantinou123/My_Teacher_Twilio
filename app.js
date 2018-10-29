require('dotenv').load()
const http = require('http')
const path = require('path')
const express = require('express')
const cors = require('cors')
const tokenGenerator = require('./tokenConfig/tokenGenerator')

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  const { identity, room } = req.query
  const identityToUse = identity || 'identity'
  res.send(tokenGenerator(identityToUse, room))
})

const server = http.createServer(app)
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
