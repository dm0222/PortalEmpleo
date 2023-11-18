const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const {config} = require('../config/config')

const systemService = require('../service/system.service');
const system = new systemService();

const router = express.Router();

// URL http://localhost:3000/api/v1/system/register
router.post('/register', async(req,res,next) => {
    try {
        const {Nombre, Apellido, Email, Contrasena, type} = req.body;
        const resRegister = await system.systemRegister(type,Nombre,Apellido,Email,Contrasena);
        res.json(resRegister);
    } catch (error) {
        next(error);
    }
});

// URL http://localhost:3000/api/v1/system/register/empresa
router.post('/register/empresa', async(req,res,next) => {
    try {
        const {Nombre, Email, Contrasena} = req.body;
        const resRegister = await system.systemRegisterEmpresa(Nombre,Email,Contrasena);
        res.json(resRegister);
    } catch (error) {
        next(error);
    }
});

// URL http://localhost:3000/api/v1/system/login
router.post('/login',
    passport.authenticate('local', { session: false }),
    async(req,res,next) => {
    try {
        const username = req.body.username;
        const payload = {
            username:username
        }

        const Token = jwt.sign(payload,config.jwtSecret)
        res.json({statusCode:200,token:Token,mesagge:'Inicio de sesion Correcto'});
    } catch (error) {
        next(error);
    }
});

// URL http://localhost:3000/api/v1/system/send-confirmation
router.post('/send-confirmation', async(req,res,next) => {
    try {
        const {Email} = req.body;
        const resLogin = await system.sendEmail(Email);
        res.json(resLogin);
    } catch (error) {
        next(error);
    }
});

module.exports = router;