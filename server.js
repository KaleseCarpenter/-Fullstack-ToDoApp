/* THINGS TO INSTALL ---commands to be run
npm init -y , npm i express --save ,
npm i nodemon 
npm run start 
npm I dotenv
npm i mongoose
*/


// IMPORT DOTENV MODULE TO CONNECT TO OUR CONFIG FILE
const dotenv = require("dotenv");
// IMPORT MONGOOSE IN ORDER TO CONNECT TO OUR DATABASE
const mongoose = require("mongoose");
// CONNECT TO OUR CONFIG.ENV FILE
dotenv.config({
  path: "./config.env",
});
// IMPORT OUR EXPRESS APPLICATION
const app = require("./app");
// CREATE A VARIABLE THAT REPRESENT OUR DATABASE
const DB = mongoose
  .connect(
    process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD)
    // don't need this for mongoose 6 
    //{
    //   useCreateIndex: true,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    // }
  )
  .then(() => {
    console.log("DATABASE IS UP AND RUNNING...");
  })
  .catch((error) => {
    console.log(error.message);
  });
// CREATE A PORT TO LISTEN FOR REQUEST/RESPONSE CYCLE
// const port = 3000;
const PORT = process.env.PORT;
// LISTEN FOR REQUEST/RESPONSE
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});