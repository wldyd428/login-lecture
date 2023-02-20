"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register")
    }
};


const process = {
    login: async (req, res) => {
      const user = new User(req.body);
      const response = await user.login(); 
      return res.json(response);

    },
    register: (req, res) => {
      const user = new User(req.body);
      const response = user.register(); 
      return res.json(response);
    }
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


