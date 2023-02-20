"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};


const process = {
    login: (req, res) => {
      const user = new User(req.body);
      const response = user.login(); 
      return res.json(response);

    },
};

module.exports = {
    output,
    process,
};


//{key = value}  -> {key} = {key : key}    : ES6(이크마스크립트6)에서 추가된 기능
//{
//    hello : hello,
//    login : login,
//}


