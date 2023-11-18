const express = require('express');
const estudianteService = require('../service/estudiante.service');
const estudiante = new estudianteService();
const router = express.Router();

router.post('/perfil', async(req,res,next)=>{
    try {
        const {Carrera,Experiencia,Habilidades} = req.body;
        const resEstudiante = await estudiante.createProfile(Carrera,Experiencia,Habilidades);
        res.json(resEstudiante);
    } catch (error) {
        next(error);
    }
});

router.put('/perfil', async(req,res,next)=>{
    try {
        const {Carrera,Experiencia,Habilidades} = req.body;
        const resEstudiante = await estudiante.editProfile(Carrera,Experiencia,Habilidades);
        res.json(resEstudiante);
    } catch (error) {
        next(error);
    }
});

module.exports = router;