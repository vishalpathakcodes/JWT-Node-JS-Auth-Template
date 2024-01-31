const {getUser}=require("../services/auth")

async function restricToLoggedInUser(req,res,next) {
    const userId=req.cookies?.uid;
    if(!userId){
        return res.redirect('login');
    }
    const user =getUser(userId);
    if(!user){
        return res.render('login');
    }
    req.user=user;
    next();
}
async function checkAuth(req, res, next) {
    const userUid = req.cookies?.uid;
  
    const user = getUser(userUid);
  
    req.user = user;
    next();
}
module.exports={
    restricToLoggedInUser,
    checkAuth,
}
