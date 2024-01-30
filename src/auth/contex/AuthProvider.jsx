import { useReducer } from "react";
import { AuthContext} from "./AuthContext";
import { AuthReducer} from "./AuthReducer";
import { types } from "../types/types";

// const inicialState = {
//     logged: false,
// }

const init = () =>  {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user,
    }

}

export const AuthProvider = ({children})=> {

    const [authState, dispatch] = useReducer(AuthReducer, {} , init);
    
   

    const userLogin = (name = '') => {
        const user = { id: 'ABC',name: 'johana Fernandez'};

        const action = {type: types.login, payload: user}

        localStorage.setItem ('user', JSON.stringify(user));
        dispatch(action);

    }

    const SalirLogout = ()=> {
        localStorage.removeItem('user');
        const action= {type: types.logout};
        dispatch(action);
    }
    
    return (
        <AuthContext.Provider value = {{
            ...authState,
            userLogin,
            SalirLogout,
            
        }}>
            {children}
        </AuthContext.Provider>
    )
}
