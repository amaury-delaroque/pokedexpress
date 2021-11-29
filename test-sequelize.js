require('dotenv').config();

const {Pokemon, Type} = require('./app/models');

// sequelize.authenticate()
//   .then(() => console.log("aut"))
//   .catch(() => console.log("no aut"))

// Pokemon.findAll().then(pokemons=>{
//     console.log('Ona des résultats');
//     for (const pokemon of pokemons){
//         console.log(pokemon.getLog())
//     }
// }).catch(error=>{
//     console.log('On a eu un pépin', error);
// });

Pokemon.findByPk(1, {
    include : 'types'
}).then(pokemon =>{
    for(const type of pokemon.types){
        console.log(type.name)
    }
    
})

Type.findByPk(2, {
    include : 'pokemons'
}).then(type =>{
    for (const pokemon of type.pokemons){
        console.log(pokemon.nom)
    }
})