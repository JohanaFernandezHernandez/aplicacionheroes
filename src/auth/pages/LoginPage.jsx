import { useNavigate } from "react-router-dom"


export const LoginPage = () => {

  const navegacion = useNavigate();

  const onLogin = () => {
    navegacion('/dc',
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
