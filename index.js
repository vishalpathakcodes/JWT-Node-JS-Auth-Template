const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000; //You can use your own port
const staticRoute=require("./routes/staticRoute");
const userRoute=require("./routes/user");
const homeRoute=require("./routes/home");
const {restricToLoggedInUser}=require("./middlewares/auth");
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static("./static/stylesheets/signup" + '/public'));
app.use("/",staticRoute);
app.use("/home",restricToLoggedInUser,homeRoute);
app.use("/user",userRoute);

// Connecting MongoDB
const { connectToMongoDB } = require("./connection");
connectToMongoDB("mongodb://localhost:27017/userAuth")
  .then(() => {
    console.log(`MongoDB Connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
