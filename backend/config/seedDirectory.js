const {User,Caption,Meme} = require("../models/associations");
const { sequelize } = require("./connection");
const { users, captions, memes } = require("./data");


const seedDatabase = async () => {

    await sequelize.sync({force: true})

    // try {
    //     await Company.bulkCreate(companies);
    //     console.log('Able to create company data');
    // } catch (err) {
    //     console.log('Unable to add companies', err);
    // }

    const models = [User,Meme,Caption];
    const data = [users,memes,captions];

    for (let x = 0; x < models.length; x++) {
        try {
            await models[x].bulkCreate(data[x]);
            console.log('Added data for ', models[x])
        } catch (error) {
            console.log('Data', error);
        }
    }

    // sequelize.sync({alter: true})
}

module.exports = seedDatabase;