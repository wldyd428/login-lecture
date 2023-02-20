"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() { //await은 async 안에서만 사용할 수 있음
        const client = this.body;
        const { id, psword } = await UserStorage.getUserInfo(client.id); //await은 항상 Promise를 반환하는 애한테만 해줄 수 있음, Promise를 반환하기 때문에 .then()으로도 접근하여 데이터를 가져올 수 있음. await을 사용해준 이유는 "가독성"때문. fs(파일시스템)에서도 await으로 가져올 수 있음. 본인의 개발 성향에 맞춰서 하면 됨.
        
        if (id) {
            if (id === client.id && psword === client.psword) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."};
    }
    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;
