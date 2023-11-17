const express = require ('express');

const systemRouter = require('./system.router');
const estudianteRouter = require('./esudiante.router');
const graduadoRouter = require('./graduado.router');
const empresaRouter = require('./empresa.router');

function routerApi (app){
    const router = express.Router();

    app.use('/api/v1', router);

    router.use('/system', systemRouter);
    router.use('/estudiante', estudianteRouter);
    router.use('/graduado', graduadoRouter);
    router.use('/empresa', empresaRouter);

}

module.exports = routerApi;