const mongoose=require("mongoose");
const User=require('../model/user');
const {setUser}=require("../services/auth");
async function handleUserSignup(req,res){
    const {name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    })
    return res.redirect("/login");
}
async function handleUserLogin(req,res){
   const {email,password}=req.body;
   const user=await User.findOne({email,password});
   if(!user){
    return res.render("login",{
        error:"Invalid emial or password"
    })
   }
   const token=setUser(user);
   res.cookie("uid",token);
   return res.redirect("/");
}
module.exports={handleUserSignup,handleUserLogin};