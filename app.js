const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const AppError = require("./utils/appError");
const globalErrorHandler = require('./controller/errorController')
const userRouter = require("./routes/userRoute");

app.use(cors());
app.use(express.json());

// 3) ROUTES
app.use("/api/v1/user", userRouter);


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
  
app.use(globalErrorHandler);  

module.exports = app;
