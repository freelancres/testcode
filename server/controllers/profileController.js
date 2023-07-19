const { validationResult } = require("express-validator");

const Profile = require("../models/Profile.js");


/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Response}
 * @description creating user profile api controller
 */
const createProfile = async (req, res) => {
  try {
    //read validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { user_id, bio, location } = req.body;

    // Check if the profile already exists for this user
    const existedProfile = await Profile.findOne({ user: user_id });

    // no duplicated profiles
    if (existedProfile) {
      return res.status(400).json({
        error: "Profile already exists for this user !!!",
      });
    }

    // Create new profile
    const newProfile = new Profile({
      user: user_id,
      bio,
      location,
    });

    // save profile to MongoDB
    await newProfile.save();

    // return success response
    return res.status(201).json({
      message: "Profiles created successfully :) ",
      profile: newProfile,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server Error",
      err: error.message,
    });
  }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Response} response object
 */
const getProfile = async (req, res) => {
  try {
    
    // define the id
    const id = req.params.id;
    // find profile with id
    let profile = await Profile.findById(id);
    //is the profile found
    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }

    
    return res.status(200).json({
      profile
    });

  } catch (error) {
     return res.status(500).json({
       message: "Server Error",
     });
  }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Response} response object
 */
const updateProfile = async (req, res) => {
  try {
    // get request body data
    const { bio, location } = req.body;
    
   // add profile fields
    const profileFields = {};
    if (bio) profileFields.bio = bio;
    if (location) profileFields.location = location;

    // define the id
    const id = req.params.id;
    // find profile with id
    let profile = await Profile.findById(id);
    //is the profile found
    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }

     profile = await Profile.findByIdAndUpdate(id,
      { $set: profileFields},
      {new: true}
    );
    profile.save()

    return res.status(200).json({
      message: "Profile updated",
      profileFields
    });

  } catch (error) {
     return res.status(500).json({
       message: "Server Error",
     });
  }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Response} response object
 */
const deleteProfile = async (req, res) => {
  try {
    // define the id
    const id = req.params.id;
    // find profile with id
    const profile = await Profile.findById(id);
    //is the profile found
    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }

    await Profile.findByIdAndRemove(id);

    return res.status(200).json({
      message: "Profile removed"
    });

  } catch (error) {
     return res.status(500).json({
       message: "Server Error",
     });
  }
}


module.exports = {
    createProfile,
    getProfile,
    updateProfile,
    deleteProfile,
};
