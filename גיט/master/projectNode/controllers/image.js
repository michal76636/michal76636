const Image = require('../models/Image');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


const createImage = async (req, res) => {
try{
  console.log(req.params.token);
  const u = jwt.verify(req.params.token, process.env.SECRET);
  console.log(u);
  const user = await User.findOne({ name: u.name, password: u.password })
  let newImage = new Image(req.body)
  newImage.user = user._id;
  await newImage.save();
  user.Images.push(newImage);
  await user.save();
  res.send(newImage);

  console.log("newImage: " + newImage)
}
catch (error) {
  return res.status(500).json(error);
}
};

const deleteImage = async (req, res) => {
  try {
    let image = await Image.findOne(req.params.url);
    if (!image) {
      return res.status(500).json({ message: "image is not exists!" });
    }
    await User.findByIdAndUpdate(image._id, {
      $pull: { images: image._id }
    })
      .then((user) => {
        user.save();
      });
    await Image.deleteOne(image);
    return res.status(200).json({ message: "image deleted!" });
  } catch (error) {
    return res.status(500).json(error);
  }
}


const getImages =async (req, res) => {
  try{
   const token = req.params.token;
  // console.log(req.params.token);


    const user = jwt.verify(req.params.token, process.env.SECRET);
    const u = await User.findOne({ name : user.name, password: user.password })
    // const img = await Image.findOne({user : user.userId})
    // console.log("jjjiiiiiiiiiiiiiiiiiiiiiiiijj"+img)

   const us = await u.populate('url').execPopulate();
    console.log("jjjjj"+us)
   const i=us.Images
    //   console.log("jjkkkjjj"+us)

     res.send(i)
}
catch (error) {
  return res.status(500).json(error);
}
}

module.exports = { createImage, deleteImage, getImages}