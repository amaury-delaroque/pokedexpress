
const {Pokemon, Type} = require('../models/');

const mainController = {
    home : (request, response)=>{
        Pokemon.findAll().then(pokemons =>{
            response.render('index', {pokemons})
        }).catch(error=>{
            console.error(error)
        })
    },
    detailsPokemon : (request, response)=>{
        const numero = Number(request.params.numero);
        Pokemon.findByPk(numero,{
            include : 'types'
        }).then(pokemon=>{
            response.render('details', {pokemon})
        }).catch(error=>{
            console.log(error)
        })

    },
    handleAllTypes : (request, response)=>{
        Type.findAll().then(types =>{
            response.render('types', {types})
        })
    },
    handlePokemonsByTypes : (request, response)=>{
       const id =  Number(request.params.id);
       Type.findByPk(id, {
           include : 'pokemons'
       }).then(type=>{
           response.render('index', {pokemons : type.pokemons})
       })
    }

}



module.exports = mainController