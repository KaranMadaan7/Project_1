import { LOGIN, LOGOUT} from "../ActionTypes"

export const userLogin = (username,password) =>{
    const token = username+password;
    return({
        type:LOGIN,
        payload:token
    })
};

export const userLogout = () =>{
    
    return({
        type:LOGOUT,
    })
};