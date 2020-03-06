const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    national_number: { type: String },
    evolution: { type: String },
    sprites: {
        normal: { type: String },
        large: { type: String },
        animated: { type: String }
    },
    name: { type: String },
    type: [
        { type: String },
        { type: String }
    ],
    total: { type: Number },
    hp: { type: Number },
    attack: { type: Number },
    defense: { type: Number },
    sp_atk: { type: Number },
    sp_def: { type: Number },
    speed: { type: Number }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon