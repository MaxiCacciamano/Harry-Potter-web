const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('character', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    actor:{
      type: DataTypes.STRING,
    },
    ancestry:{
      type: DataTypes.STRING,
    },
    house:{
      type: DataTypes.STRING,
    },
    image:{
      defaultValue: "http://hp-api.herokuapp.com/images/harry.jpg",
      type: DataTypes.TEXT,
   },
   actividades:{
     type: DataTypes.ARRAY(DataTypes.STRING),
   },
    createDb:{
      type: DataTypes.BOOLEAN,
      defaultValue:false,
  }
  });
};
