"use strict"

const db = require("../config/db");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => { //promise 안에 있는 구문이 성공을 하면 reserve를 실행, 실패 시 reject를 실행
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if(err) reject(`${err}`);
        resolve(data[0]);
      });
    })
  };

  static async save(userInfo) {
    return new Promise((resolve, reject) => { //promise 안에 있는 구문이 성공을 하면 reserve를 실행, 실패 시 reject를 실행
      const query = "INSERT INTO users(id, name, psword) value(?, ?, ?);";
      db.query(
        query, 
        [userInfo.id, userInfo.name, userInfo.psword], 
        (err) => {
        if(err) reject(`${err}`);
        resolve({ success: true });
      });
    })
  }
}

module.exports = UserStorage;
