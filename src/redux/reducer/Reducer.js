import { LOGIN, LOGOUT } from "../ActionTypes";

const initialstate = {
    authtoken:1234,
}

export const userReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case LOGIN:
            return {...state,authtoken:action.payload}

            case LOGOUT:
                return {authtoken:null}
            default:
                return state
    }
}

