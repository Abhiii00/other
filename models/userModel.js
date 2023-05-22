const config = require("../config");
// require("dotenv").config();
const mysql = require("mysql2");
const pool = mysql.createPool({
  host: config.mysqlHost,
  user: config.user,
  password: process.env.DB_PASS || config.password,
  database: config.database,
  port: config.mysqlPort,
});
const promisePool = pool.promise();

class userModel {

 insertDetails = async (data) => {
    let sql = `insert into userLogin (name, email, password)values ('${data.name}','${data.email}', '${data.password}')`;
    const [result, fields] = await promisePool.query(sql);
    console.log(sql , result)
    return result;
  };


getUsersDetails = async () => {
    let sql = `SELECT ul.name, ul.email FROM userLogin as ul`;
    const [result, fields] = await promisePool.query(sql);
    return result;
}

getSpecificUser = async (name) =>{
    let sql = `SELECT name, email FROM userLogin WHERE name = '${name}';`;
    const [result, fields] = await promisePool.query(sql);
    console.log(sql, result)
    return result;
}

updateUserByName = async (reqData,data) =>{
    let sql = ` UPDATE userLogin
    SET name = '${reqData.name}',
      email = '${reqData.email}'
    WHERE name = '${data.name}'`   
 const [result, fields] = await promisePool.query(sql);
 console.log(sql, result)
    return result;
}  

getUserByEmail = async (email) =>{
    let sql = `SELECT email, password FROM userLogin WHERE email = '${email}';`;
    const [result, fields] = await promisePool.query(sql);
    return result;
}

}

  module.exports = new userModel();