const express = require('express');
const routerApi = require('./router/router');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler');
const { config } = require('./config/config');
const port = config.port;

const app = express();
app.use(cors());
app.use(express.json());


// Prueba de que el api esta funcionando normalmente
// http://localhost:3000/
app.get ('/', (req,res) => {
    res.json('hola todo tranqui');
});

require('./utils/auth/index');

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
})