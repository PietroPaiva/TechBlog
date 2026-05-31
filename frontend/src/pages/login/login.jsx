import './login.css'
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleSubmit(){

        try{
            const response = await axios.post('http://localhost:3000/login', {
                email, password
            })

            localStorage.setItem('token', response.data.token)
            navigate('/home')

        }
    catch(error){
        alert('Email ou senha inválidos')
        }

    }
    
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
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="passwordButton">Senha</label>
                <input
                    type="password"
                    name="Senha"
                    id="passwordButton"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />

                    <button className="login-button" onClick={handleSubmit}>Entrar</button>
                
            </section>
        </main>
    )
}

export default Login;
