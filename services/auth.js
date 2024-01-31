const jwt=require("jsonwebtoken");
const secret="123@456@789" //Add your own secret key here. Do not share it with anyone. I have changed mine
async function setUser(user){
    return jwt.sign({
        _id:user.id,
        email: user.email,
    },secret)
}

async function getUser(token){
    if(!token)return null;
    return jwt.verify(token,secret);
}
module.exports={
    setUser,
    getUser,
}