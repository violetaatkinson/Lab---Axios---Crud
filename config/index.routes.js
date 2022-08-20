const router = require("express").Router();

// GET CONTROLLERS
const miscController = require("../controllers/misc.controller");
const characterController = require("../controllers/characters.controller");

//HOME
router.get("/", miscController.home);

//CHARACTERS ROUTES

// SHOW CHARACTER LIST
router.get("/character/list", characterController.list);

// CREATE A NEW CHARACTER
router.get("/character/create", characterController.create);
router.post("/character/create", characterController.doCreate);

//GET CHARACTER DETAILS
router.get("/character/:id",characterController.details);

// DELETE A CHARACTER
router.delete("/character/:id" , characterController.delete);

module.exports = router;

