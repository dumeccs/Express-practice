const express = require('express')
const app = express()
const port = 9000
const timeChecker = require('./middleware/timeChecker')
app.set('view engine', 'ejs')

const urlrouters = require('./routes/urls')
app.use(timeChecker)
app.use(urlrouters)
app.listen(port, () => {
    console.log('server running')
}) 