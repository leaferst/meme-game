const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('memegame','postgres','postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('connected to database')
        return true;
    } catch (error) {
        console.log('unable to connect', error);
        return false;
    }
}



module.exports = {
    sequelize,
    testConnection
}