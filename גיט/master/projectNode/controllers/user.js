const User = require('../models/User');
const Image = require('../models/Image');
const jwt = require('jsonwebtoken');
const newUser = async (req, res) => {
  console.log("new user");
  console.log(req.body);

  try {
    const newUser = new User(req.body)
    const user = await newUser.save()
    console.log(user)
    res.status(200).json({
      massege: 'user created', newUser: user
    })
  }
  catch (err) {
    res.status(500).json({ massege: err.massege })
  }
}


const getById = (req, res) => {
  const user = User.findById(req.params.userId)
    .then((user) => {
      res.status(200).json({ theUser: user })
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
}

const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.userId, req.body)
    res.status(200).send("the user is updated")
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}

const loginUser = async (req, res) => {
  console.log("login user");
  console.log(req.params);
  let user =await User.findOne({ name: req.params.name, password: req.params.password }).populate('Images');
  console.log(user);
  if (user) {

    const token = jwt.sign({ name: req.params.name, password: req.params.password }, process.env.SECRET);
    console.log(token);
    res.status(200).json({ "token": token, user: user });
  }
  else {
    res.status(500).json({ "error": error });
  }
}

//  const deleteImageFromUser = async (req, res) => {
//   try {
//       let image = await Weather.findOne({city:req.params.city});
//       await User.findByIdAndUpdate(req.params.usertId, {$pull:{requests:weather._id}});
//       await Weather.findOneAndDelete({city:req.params.city});
//       res.status(200).json({"massage":"weather deleted"});
//   } catch (err) {
//       res.status(500).json({"error":err})
//   }
// }
module.exports = { newUser, getById, updateUser, loginUser }