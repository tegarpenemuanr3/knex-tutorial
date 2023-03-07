// const options = {
//   client: "mysql2",
//   connection: {
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     database: "mydb",
//   },
// };

// const knex = require("knex")(options);

// knex("users")
//   .select(knex.raw("count(*) as user_count, status"))
//   .where(knex.raw(1))
//   .orWhere(knex.raw("status <> ?", [1]))
//   .groupBy("status")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//     throw err;
//   })
//   .finally(() => {
//     knex.destroy();
//   });
