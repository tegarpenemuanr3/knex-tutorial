const options = {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "mydb",
  },
};

const knex = require("knex")(options);

// * Data yang dominan ditampilkan semua dan data yang sama.
knex
  .select("*")
  .from("user")
  .leftJoin("cars", "user.id", "cars.user_id")
  .then((rows) => {
    // console.log(rows);
    for (row of rows) {
      console.log(
        `${row["id"]} ${row["nama"]} ${row["car_name"]} ${row["car_price"]}`
      );
    }
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
