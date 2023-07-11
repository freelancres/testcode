const express = require('express');
const { check } = require('express-validator');


const {
  test,
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile
} = require("../controllers/profileController");
    

const auth = require('../middleware/auth');
    
const router = express.Router();


/**
 * @private
 * @path /api/profiles/create-profile
 */
router.post(
  "/create-profile",
  [
    auth,
    check("user_id", "User ID is required!").notEmpty(),
    check("bio", "Bio is required!").notEmpty(),
    check("location", "Location is required!").notEmpty(),
  ],
  createProfile
);


/**
 * @private
 * @method GET
 * @path /api/profiles/:id
 * @description get a profile by id
 */
router.get('/:id', auth, getProfile);

/**
 * @private
 * @method put
 * @path /api/profiles/:id
 * @description Update a profile by id
 */
router.put('/:id', auth, updateProfile);


/**
 * @private
 * @method delete
 * @path /api/profiles/:id
 * @description Delete a profile by id
 */
router.delete('/:id', auth, deleteProfile);








/**
 * @path : /api/profiles/test
 * @public
 * @description testing the api
 * 
 */
router.get("/test", test);


module.exports = router;