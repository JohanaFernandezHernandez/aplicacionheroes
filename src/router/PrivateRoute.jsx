import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation} from "react-router-dom"

export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);
    const { pathname, search} = useLocation();

    const LastPath = pathname + search;
    localStorage.setItem('LastPath', LastPath);


  return (logged)
         ?children
         : <Navigate to="/login"/>
}


