const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const mongoose = require("mongoose");

const DB = process.env.DATABASE_URL.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"))
  .catch((e) => {
    console.log(e.message);
  });
