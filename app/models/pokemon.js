
const sequelize = require('../database');

const { Model, DataTypes} = require('sequelize');

class Pokemon extends Model {
    getLog() {
        return `Réponse d'id ${this.id} : ${this.nom}`
    }
}

Pokemon.init({
    old_id : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nom : {
        type : DataTypes.TEXT,
        allowNull: false
    },
    pv : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    attaque : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    defense : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    attaque_spe : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    defense_spe : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vitesse : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    numero : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'pokemon'
})

module.exports = Pokemon;