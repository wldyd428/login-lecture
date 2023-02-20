"use strict";

//DOM = Document Object Model
//문서 객체 모델 : 일종의 인터페이스
//자바스크립트에서 html에 존재하는 데이터들을 가져와서 제어할 수 있게 됨

const id = document.querySelector("#id"),
 name = document.querySelector("#name"),
 psword = document.querySelector("#psword"),
 confirmPsword = document.querySelector("#confirm-psword"),

 registerBtn = document.querySelector("#button");

 registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };


    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
         location.href = "/login";
    } else {
        alert(res.msg);
    }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
};
