const express = require("express");
const data = require("./utils/data");
const routes = require("./routes/index")

const PORT = 3001;

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(express.json());
app.use("/rickandmorty", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  
  // module.exports = app