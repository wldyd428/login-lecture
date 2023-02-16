"use stict";  //자바스크립트 파일을 만들 때 상단에는 이크마스크립트 문법을 준수하겠다고 명시해야함

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home); 
router.get("/login", ctrl.login);


module.exports = router;
