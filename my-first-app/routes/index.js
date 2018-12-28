const express = require('express')
const router = express.Router()

router.get('/',(req,res,next) => {
  res.render('index',null)
})

router.get('/json',(req,res,next) => {
    const data = {name:'Dhruv',location:'Sydney'}
    res.json(data)
})

router.get('/html',(req,res,next) => {
  const html = '<html><h1 style="color:red">This is an HTML response</h1></html>'
  res.send(html)
})

router.get('/query',(req,res,next) => {
  const query = req.query
  res.json(query)
})

router.get('/params/:name/:location/:occupation',(req,res,next) => {
  const params = req.params
  res.json({
    params: params
  })
})
module.exports = router
