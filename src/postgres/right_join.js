// MySQL
// const options = {
//   client: "mysql2",
//   connection: {
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     database: "mydb",
//   },
// };

//Postgre
const options = {
  client: "postgresql",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "12345678",
    database: "latihan",
  },
};

const knex = require("knex")(options);

knex
  .select("*")
  .from("users")
  .rightJoin("cars", "users.id", "cars.user_id")
  .then((rows) => {
    console.log(rows);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
