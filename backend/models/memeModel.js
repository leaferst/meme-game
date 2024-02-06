const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const Meme = sequelize.define('meme', {
    src: DataTypes.STRING(),
}, {
    validate: true,
    timestamps: false,
    allowNull: false,
})

module.exports = Meme;


