const db = require("../models");
const jsonfile = require('jsonfile')
const file = '../client/src/data.json';

// Defining methods for the articleController
module.exports = { 
  create: function(req, res) {
    const student = {
      name: req.body.name,
      math: req.body.math,
      history: req.body.history,
      science: req.body.science,
      english: req.body.english,
    };
    console.log("student info: " +JSON.stringify(student));
    jsonfile.writeFile(file, student)
    .then(res => {
      console.log('Write complete')
    })
    .catch(error => console.error("err in writing to json file: " +error))
  }
};
