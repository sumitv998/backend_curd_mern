const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./app");
require("./DB/databaseConnection");

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
