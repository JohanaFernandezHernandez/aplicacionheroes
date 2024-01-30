import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../contex/AuthContext";


export const LoginPage = () => {

  const {userLogin} = useContext(AuthContext);

  const navegacion = useNavigate();

  const onLogin = () => {
    
    const LastPath = localStorage.getItem('LastPath') || '/'
    userLogin('Johana Fernandez');

    navegacion(LastPath,
    {replace: true
    })

  }




  return (
    <div>
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }>
        Login
      </button>
    </div>

  )
}
