import './header.css'
import { Link } from 'react-router-dom'

export default function Header(){


    return(
         <header className="header">
            <span>TechBlog</span>
            <Link to="/">
                <button className="back-button">↩</button>
            </Link>
        </header>
    )
}