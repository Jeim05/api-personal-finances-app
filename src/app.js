const app = require('./index.js')

app.get('port', () => {
    console.log("Servidor escuchando en el puerto", app.get("port"));
  });