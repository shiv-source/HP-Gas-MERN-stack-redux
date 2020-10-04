const Costomer = require("../models/costomer");

const createCostomer = async (req, res) => {
    
  try {
    let newCostommer = new Costomer({
      owner: req.user._id,
      ...req.body,
    });

    let saveNewCostommer = await newCostommer.save();

    return res.status(201).json({
      message: "Created new costommer data",
      success: true,
      result: saveNewCostommer,
    });


  } 
  
  catch (err) {
    return res.status(500).json({
      message: "Unable to create new costomer",
      success: false,
    });
  }
};

const getAllCostomer = async (req, res) => {
  try {
    let costomer = await Costomer.find({ owner: req.user._id });
    if (costomer.length < 1) {
      return res.status(404).json({
        message: "No costomer data found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Costomer data fetched successfully",
      success: true,
      result: costomer,
    });


  }
  
  catch (err) {
    return res.status(500).json({
      message: "Unable to fetch costomers data",
      success: false,
    });
  }
};

module.exports = { createCostomer, getAllCostomer };
