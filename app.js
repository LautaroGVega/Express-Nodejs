const { query } = require('express')
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('//producto?id=1234&titulo=abc', (req, res) => {
    let id = req.query.id;
    let titulo = req.query.titulo;

    const html = "<html><head><title>Docuemnt</title></head></html>"

    res.send(html)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})