const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ENV = require("../config/env");
const User = require("../models/user");
const saltRounds = 12;

const userRegister = async (req, res) => {
  try {
    let emailNotRegistered = await validateEmail(req.body.email);
    if (!emailNotRegistered) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
      });
    }

    let password = await bcrypt.hash(req.body.password, saltRounds);

    let newUser = new User({
      ...req.body,
      password,
    });

    let saveNewUser = await newUser.save();

    let serializedUser = {
      _id: saveNewUser._id,
      firstName: saveNewUser.firstName,
      lastName: saveNewUser.lastName,
      email: saveNewUser.email,
    };

    return res.status(201).json({
      message: "User created successfully",
      success: true,
      result: serializedUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Unable to create you account",
      success: false,
    });
  }
};

const validateEmail = async (email) => {
  let user = await User.findOne({ email });
  return user ? false : true;
};

const userLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(req.body)

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not exists",
        success: false,
      });
    }
  
    //check password
  
    let isMatch = await bcrypt.compare(password, user.password);
  
    if (isMatch) {
      let payload = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      let token = await jwt.sign(payload, ENV.JWT_KEY, { expiresIn: "7days" });
  
      return res.status(200).json({
        message: "You are loggedin successfully",
        success: true,
        token: token,
      });
    } else {
      return res.status(401).json({
        message: "Incorrect credentials",
        success: false,
      });
    }
  }
  catch(err){
    return res.status(500).json({
      message : "Unable to login",
      success : false
    })
  }

};

module.exports = {
  userRegister,
  userLogin,
};
