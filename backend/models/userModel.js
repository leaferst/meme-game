const { sequelize } = require('../config/connection');
const { DataTypes } = require("sequelize");



const User = sequelize.define('user', {
    displayName:  DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    gameWins: DataTypes.INTEGER,
    // votes: DataTypes.INTEGER
}, {
    allowNull: false
});


module.exports = User;


