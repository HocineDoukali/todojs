const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

// Middlewares
app.use(cors({ origin: '*' }))
app.use(express.json())

// Route 
const route = require('./route/pcs')
app.use(route)

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server listening on port 3000! `)
})