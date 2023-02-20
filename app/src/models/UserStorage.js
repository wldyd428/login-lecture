"use strict"

const fs = require("fs").promises; //Promise는 약속이라는 의미로 Promise가 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 아주 효과적

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users); // => [id, psword, name]
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
  
  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error);
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      //.then() //Promise를 반환하게 되면 then이라는 메소드에 접근 가능, 해당 로직이 성공했을 때 실행됨
      //.catch(); //Promise를 반환하는 것에 대한 오류처리는 catch로 해줄 수 있음, 해당 로직이 실패했을 때 실행됨
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
    //.catch((err) => console.error(err)); //함수를 실행 시키는데 파라미터로 넘어오는 변수를 실행시키는 함수로 똑같이 넘기게 되면 생략 가능
      .catch(console.error);
  }



  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    return { success: true };
  
  }
}

module.exports = UserStorage;
