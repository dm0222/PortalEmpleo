const express = require('express');
const systemService = require('../service/system.service');
const system = new systemService();

const router = express.Router();

// URL http://localhost:3000/api/v1/system/register
router.post('/register', async(req,res,next) => {
    try {
        const {Nombre, Apellido, Email, Contrasena, type} = req.body;
        const resRegister = system.systemRegister(type,Nombre,Apellido,Email,Contrasena);
        res.json(resRegister);
    } catch (error) {
        next(error);
    }
});

// URL http://localhost:3000/api/v1/system/register/empresa
router.post('/register/empresa', async(req,res,next) => {
    try {
        const {Nombre, Email, Contrasena} = req.body;
        const resRegister = system.systemRegisterEmpresa(Nombre,Email,Contrasena);
        res.json(resRegister);
    } catch (error) {
        next(error);
    }
});

// URL http://localhost:3000/api/v1/system/login
router.post('/login', async(req,res,next) => {
    try {
        const {Email, Contrasena} = req.body;
        const resLogin = system.systemLogin(Email,Contrasena);
        res.json(resLogin);
    } catch (error) {
        next(error);
    }
});

// URL http://localhost:3000/api/v1/system/send-confirmation
router.post('/send-confirmation', async(req,res,next) => {
    try {
        const {Email, Contrasena} = req.body;
        const resLogin = system.sendEmail(Email,Contrasena);
        res.json(resLogin);
    } catch (error) {
        next(error);
    }
});