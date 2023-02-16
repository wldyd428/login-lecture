"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
};


//{key = value}  -> {key} = {key : key}    : ES6(이크마스크립트6)에서 추가된 기능
//{
//    hello : hello,
//    login : login,
//}

