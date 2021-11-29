const Pokemon = require('./pokemon');
const Type = require('./type');


Pokemon.belongsToMany(Type, {
    foreignKey: 'pokemon_id',
    otherKey : 'type_id',
    as : 'types',
    through : 'pokemon_type'
});

Type.belongsToMany(Pokemon, {
    foreignKey : 'type_id',
    otherKey: 'pokemon_id',
    as : 'pokemons',
    through : 'pokemon_type'
});

module.exports = {
    Pokemon,
    Type
}
