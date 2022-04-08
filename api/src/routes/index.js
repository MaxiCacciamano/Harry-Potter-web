const { Router } = require('express');
const express = require('express');
const characterR = require('./Character');
const activitiesR = require('./Activities')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// router.use(express.json());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json())  
router.use('/characters', characterR);


module.exports = router;
