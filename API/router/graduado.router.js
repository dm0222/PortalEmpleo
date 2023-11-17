const express = require('express');
const graduadoService = require('../service/graduado.service');
const graduado = new graduadoService();
const router = express.Router();

router.post('/perfil', async(req,res,next)=>{
    try {
        const {Titulos,Carrera,Experiencia,Habilidades} = req.body;
        const resGraduado = graduado.createProfile(Titulos,Carrera,Experiencia,Habilidades);
        res.json(resGraduado);
    } catch (error) {
        next(error);
    }
});

router.put('/perfil', async(req,res,next)=>{
    try {
        const {Titulos,Carrera,Experiencia,Habilidades} = req.body;
        const resGraduado = graduado.editProfile(Titulos,Carrera,Experiencia,Habilidades);
        res.json(resGraduado);
    } catch (error) {
        next(error);
    }
});