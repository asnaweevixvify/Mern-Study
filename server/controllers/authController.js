const jwt = require('jsonwebtoken')
const { expressjwt: expressJWT } = require("express-jwt");

module.exports.login = (req,res)=>{
    const {username,password} = req.body
    if(password===process.env.PASSWORD){
        //รหัสผ่านตรงกับรหัสในไฟล์ env
        const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'1d'}) //token มีอายุ 1 วัน
        return res.json({username,token})
    }
    else{
        res.status(400).json({error:'รหัสไม่ถูกต้อง'})
    }
}

//ตรวจสอบ token
module.exports.requireLogin = expressJWT({
    secret: () => process.env.JWT_SECRET,
    algorithms:["HS256"],
    requestProperty:"auth"
})