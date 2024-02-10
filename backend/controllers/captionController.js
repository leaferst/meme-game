const {Caption, Meme} = require("../models/associations");

const getAllCaptions = async (req, res) => {
    let result = await Caption.findAll({
        include: {
            model: Meme,
            // as: 'picture',
            // through: {
            //     attributes: ['src']
            // }
        },
    });

    // result.forEach(r => console.log(r.toJSON()))

    result = result.map(r => r.toJSON());

    console.log(result);
    
    res.json(result);
}



module.exports = {
    getAllCaptions,
}