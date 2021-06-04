// const http = require('http')
// var fs = require('fs')

// const port = 8080

// const server = http.createServer((req, res) => {
//   fs.readFile('public/html/cease_fire.html', (err, data) => {
//     res.statusCode = 200
//     // res.setHeader('Content-Type', 'text/html', 'Content-Length', data.length)
//     res.write(data)
//     res.end()
//   })
// })

// server.listen(port, () => {
//   console.log(`http://0.0.0.0:${port}/`)
// })


const express = require('express')
const path = require('path')

const app = express()

const port = 8000

app.use(express.static(path.join(__dirname, './public')))

// app.use('/', express.static('./public/html'))


app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})