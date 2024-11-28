const express = require('express')
const app = express()
const port = 3001

app.get('/api', (req, res) => {
    res.json({ mensaje: '¡Bienvenido a la API!' });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})