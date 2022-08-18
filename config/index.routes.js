const router = require("express").Router();

// GET CONTROLLERS
const miscController = require("../controllers/misc.controller");
const characterController = require("../controllers/characters.controller");

//HOME
router.get("/", miscController.home);

//CHARACTERS ROUTES

// CREATE A NEW CHARACTER
router.get("/createcharacter", characterController.create);
router.post("/createcharacter", characterController.doCreate);

//GET CHARACTER DETAILS
router.get("/character/:id",characterController.details);

// DELETE CHARACTER
router.delete("/character/:id" , characterController.delete);

module.exports = router;

