const User = require("../models/userSchema");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  // console.log("getData");

  const user = await User.find();

  // SEND RESPONSE
  res.status(200).json(user);
});

exports.addUser = catchAsync(async (req, res, next) => {
  // console.log("req",req);
  
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    number: req.body.number,
    work: req.body.work,
    add: req.body.add,
    desc: req.body.desc,
  });

  if (!user) {
    return next(new AppError("Please provide details of User!", 404));
  }

  // SEND RESPONSE
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.getUserFromId = catchAsync(async(req,res,next)=> {
    // console.log(`${req.params.id} req.query.id`);
    
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new AppError("Please provide correct details of User!", 404));
    }

    res.status(201).json(user);
})

exports.getUserUpdateById= catchAsync(async(req,res,next)=> {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
    
      if (!user) {
        return next(new AppError("No user found with that ID", 404));
      }
    
      res.status(200).json(user);
})

exports.deleteUserById= catchAsync(async(req,res,next)=> {
    const user = await User.findByIdAndDelete(req.params.id);
    
      if (!user) {
        return next(new AppError("Please provide a vail ID", 404));
      }
    
      res.status(200).json({
        status: "success",
        message: "deleted successfully!"
      });
})