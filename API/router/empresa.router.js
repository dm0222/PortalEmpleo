const express = require('express');
const empresaService = require('../service/empresa.service');
const empresa = new empresaService();
const router = express.Router();

router.post('/perfil', async(req,res,next)=>{
    try {
        const {Descripcion,Sector} = req.body;
        const resEmpresa = empresa.createProfile(Descripcion,Sector);
        res.json(resEmpresa);
    } catch (error) {
        next(error);
    }
});

router.put('/perfil', async(req,res,next)=>{
    try {
        const {Descripcion,Sector} = req.body;
        const resEmpresa = empresa.editProfile(Descripcion,Sector);
        res.json(resEmpresa);
    } catch (error) {
        next(error);
    }
});

module.exports = router;