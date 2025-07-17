//เก็บข้อมูล token / username ลง session

export function authenticate (res){
    if(window !== undefined){ //มีการเปิดใช้งาน web browser
        //เก็บข้อมูลลง session
        sessionStorage.setItem("token",JSON.stringify(res.data.token))
        sessionStorage.setItem("user",JSON.stringify(res.data.username))
    }
}

//ดึงข้อมูล token
export function getToken(){
    if(window !== undefined){
        if(sessionStorage.getItem('token')){
            return JSON.parse(sessionStorage.getItem('token')            )
        }
    }
    else{
        return false
    }
}

//ดึงข้อมูล user
export function getUser(){
    if(window !== undefined){
        if(sessionStorage.getItem('user')){
            return JSON.parse(sessionStorage.getItem('user')            )
        }
    }
    else{
        return false
    }
}

//logout
export function logout(){
    if(window !== undefined){
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
    }
}