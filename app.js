
const express = require('express')
const path = require('path')

const app = express()

const root = path.join(__dirname, 'public')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))



app.listen(port, () => console.log(`Server running: http://localhost:${port}`))