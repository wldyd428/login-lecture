"use strict";

//DOM = Document Object Model
//문서 객체 모델 : 일종의 인터페이스
//자바스크립트에서 html에 존재하는 데이터들을 가져와서 제어할 수 있게 됨

const id = document.querySelector("#id"),
 pasword = document.querySelector("#psword"),
 loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pasword: pasword.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JASON.stringify(req)
    })
};