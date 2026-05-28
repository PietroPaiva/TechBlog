import { Link, useLocation } from 'react-router-dom'
import './header.css'

export default function Header(){
    const { pathname } = useLocation()
    const isWelcomePage = pathname === '/'
    const isLoginPage = pathname === '/login'

    return(
        <header className="header">
            <strong>TechBlog</strong>

            {isWelcomePage && (
                <Link className="header-login-link" to="/login">Entrar</Link>
            )}

            {!isWelcomePage && !isLoginPage && (
                <Link className="logout-button" to="/" aria-label="Sair">
                    <span aria-hidden="true">↪</span>
                </Link>
            )}
        </header>
    )
}
