const Meme = require("./memeModel");
const Caption = require("./captionModel");
const User = require("./userModel");


User.hasMany(Caption);
Caption.belongsTo(User);

Meme.hasMany(Caption);
Caption.belongsTo(Meme);


module.exports = {
    Caption,
    Meme,
    User
}