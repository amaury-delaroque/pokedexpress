const sequelize = require('../database');

const { Model, DataTypes} = require('sequelize');

class Type extends Model {
    getLog() {
        return `Réponse d'id ${this.id} : ${this.name
        }`
    }
}

Type.init({
    old_id : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    name : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    color : {
        type : DataTypes.TEXT,
        allowNull : false
    }
},{
    sequelize,
    tableName : 'type'
})

module.exports = Type;