var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Pokemon = mongoose.model('Pokemon');

/* GET pokemons listing. */
router.get('/', function (req, res, next) {
  Pokemon.find(req.body, (err, pokemons) => {
    return res.status(200).send(pokemons)
  })
});

/* POST pokemon */
router.post('/create', function (req, res, next) {
  Pokemon.create(req.body, (err, pokemon) => {
    return res.status(200).send(pokemon)
  })
});

/* GET pokemon */
router.get('/:id', function (req, res, next) {  
  Pokemon.findById(req.params.id, (err, pokemon) => {
    if(err) {
      console.log(err);
      return res.status(200).send({ok: false})
    }
    return res.status(200).send(pokemon)
  })
})

module.exports = router;