const {Router} = require('express');
const router = Router();
const characters = require('../controllers/character')

router.get('/getAllCharacters', characters.getAll);
router.get('/detail/:id', characters.getDetail)
router.post('/addCharacters', characters.postCharacters)

module.exports = router;