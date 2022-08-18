const ApiService = require('../services/api.service');
const apiService = new ApiService();
const createError = require("http-errors");


// SHOW CHARACTERS LIST
module.exports.list = (req, res, next) => {
    apiService
      .getAllCharacters()
      .then((response) => {
        res.render("character/list", { characters: response.data });
      })
      .catch(err => {
        console.error(err);
        next(err);
      });
  };

//GET CHARACTER DETAILS
  module.exports.details = (req, res, next) => {
    const { id } = req.params;
  
    apiService
      .getOneCharacter(id)
      .then((response) => {
        res.render("character/details", { character: response.data });
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  };

// CREATE A NEW CHARACTER
module.exports.create = (req, res, next) => {
    res.render("character/form");
  }

module.exports.doCreate = (req, res, next) => {
    apiService
      .createCharacter(req.body)
      .then((createdCharacter) => {
            res.redirect("/list");
          })
          .catch((err) => {
            console.error(err);
            next(err);
          });
      };

// DELETE A CHARACTER
 module.exports.delete = (req, res, next) => {
    const { id } = req.params;
    apiService
      .deleteCharacter(id)
      .then((character) => {
        res.status(204).send(character);
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  };
    

