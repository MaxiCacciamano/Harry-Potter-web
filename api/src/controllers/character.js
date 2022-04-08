const {Character, Activity} = require('../db');
const axios = require('axios');
const {op} = require('sequelize');

const getAll = async (req, res ,next)=>{
    try{
        const getAllC = await Character.findAll({
            Include: Activity
        })
        res.status(200).send(getAllC)
    }
    catch(e){
        res.status(404).send({message:e.message});
        next(e);
        console.log("error en el getAll");
    }
}

const getDetail = async (req, res, next)=>{
    const id = req.params.id;
    try{
        if(id.includes('-')){
            const searchId = await Character.findAll({
                where:{
                    id:id
                }
            })
            res.status(200).send(searchId);
        }else{
            res.status(404).send("No encontre el id :(")
        }
    }
    catch(e){
        res.status(404).send({message: e.message});
        next(e);
        console.log("error en el get de getDetail");
    }
}

const postCharacters = async (req, res, next)=>{
    const {
        name, 
        actor, 
        ancestry, 
        house, 
        image,
        createDb,
        actividades 

    } = req.body;
    try{
        const createCharacter = await Character.create({
            name,
            actor,
            ancestry, 
            house, 
            image,
            createDb
        });

        let activityDb = await Activity.findAll({
            where: {name: actividades}
        });
        createCharacter.addActivity(activityDb)
        res.send("Personaje creado con exito");
        console.log(createCharacter)
    }
    catch(e){
        res.status(404).send({message: e.message});
        next(e);
        console.log("error en el post de activities")
    }
}

module.exports = {
    getAll,
    getDetail,
    postCharacters
}