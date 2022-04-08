//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {default: axios} = require ('axios');
const { Activity, Character } = require ('../api/src/db')
const activities = require ('../api/src/resources/activities.js');
const { name } = require('./src/app.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  
  
  server.listen(3001,async () => {
    try{
        for (let activity of activities){
            await Activity.create({
                name: activity
            })
        }

        const harrydata = await axios.get('http://hp-api.herokuapp.com/api/characters');
        const harrymap = harrydata.data.map(e=>{
          return {
            name: e.name,
            actor: e.actor,
            ancestry: e.ancestry,
            house: e.house,
            image: e.image,
            actividades: [activities[Math.floor(Math.random()*activities.length)], activities[Math.floor(Math.random()*activities.length)]]
            //se trabaja de esta manera porque las actividades de los characters de la api
            //no son de muchhos a muchos, por ende busco la solucion para este problema de api
          }
        })
        // console.log(harrymap)
        for(let character of harrymap){
          let createCharacter = await Character.create({
            name: character.name,
            actor: character.actor,
            ancestry: character.ancestry,
            house: character.house,
            image: character.image,
          })
          for(let actividades of character.actividades){
             let activityOfCharacter = await Activity.findAll({
               where: { 
                 name: actividades
               }
             })
             await createCharacter.addActivity(activityOfCharacter);
          }
        }
    }
    catch(e){
        console.log("error al traer personajes", e);
    }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
