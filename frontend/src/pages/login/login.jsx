import { Link } from "react-router-dom";
import './login.css'

function Login(){
    
    return (
        <main className="login-page">
            <section className="login-card">
                <h1>Bem-vindo de volta</h1>

                <label htmlFor="emailButton">Email</label>
                <input
                    type="email"
                    name="Email"
                    id="emailButton"
                    placeholder="Email"
                />

                <label htmlFor="passwordButton">Senha</label>
                <input
                    type="password"
                    name="Senha"
                    id="passwordButton"
                    placeholder="Senha"
                />

                <Link className="login-button" to="/home">
                    Entrar
                </Link>
            </section>
        </main>
    )
}

export default Login;
