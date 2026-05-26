import { Link } from "react-router-dom";

function Login(){
    
    return (
    <>

    <h1>Bem vindo de volta</h1>
    <p>Email</p>
    <input type="email" name="Email" id="emailButton" />
    
    <p>Senha</p>
    <input type="password" name="Senha" id="passwordButton" />

    <Link to="/home">
    <button>Entrar</button>
    </Link>
    </>
    )
}

export default Login;