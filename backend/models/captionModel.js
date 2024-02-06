const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

const Caption = sequelize.define('caption',{
    caption: DataTypes.STRING(),
}, {
    validate: true,
    timestamps: false,
    allowNull: false,
})

module.exports = Caption;
