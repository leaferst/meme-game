


const axios = require('axios');



const getAllUsers = async (req,res) => {

    const response = await axios.get(`https://65a8677f219bfa3718671c70.mockapi.io/users`);
  
        //  res.json(response[0]);
        return res.end();


};


const getAUser = async (req,res) => {

  const user = await axios.get(`https://65a8677f219bfa3718671c70.mockapi.io/users/${req.params.id}`);
  console.log(user.data);

      //  res.json(response[0]);
      return res.json(user.data);


};


const deleteUser = (req,res) => {
  users = users.filter(u => u.id !== + req.params.id);
  
  res.json({messag: 'Deleted user with id of ' + req.params.id})
};


// Add an item to a user's cart
const addItem = async (req,res) => {
  console.log(req.body)


  res.end();
  // const response = await axios.put(`https://65a8677f219bfa3718671c70.mockapi.io/users/${req.params.id}`, {cart: [item]});
  
};


module.exports = {
  getAllUsers,
  getAUser,
  deleteUser,
  addItem,
};