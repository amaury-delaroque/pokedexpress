const express = require('express');
const router = express.Router();
const mainController = require('./controller/mainController')

router.get('/', mainController.home)
router.get('/detail/:numero', mainController.detailsPokemon);
router.get('/type', mainController.handleAllTypes);
router.get('/type/:id', mainController.handlePokemonsByTypes)

module.exports = router;