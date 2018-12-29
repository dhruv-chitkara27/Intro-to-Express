const express = require('express')
const routes = require('./routes/index')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))

app.use((req,res,next) => {
  req.timestamp = new Date().toString()
  next()
})

app.use('/',routes)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hjs')


app.listen(5000)
console.log('Server running on http://localhost:5000')
