const express = require('express');
const cors = require('cors');
const { port } = require('./config/config');

const routerApi = require('./router/router');


const app = express();
app.use(cors());
app.use(express.json());


// Prueba de que el api esta funcionando normalmente
// http://localhost:3000/
app.get ('/', (req,res) => {
    res.json('hola todo tranqui');
});

routerApi(app);

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
})