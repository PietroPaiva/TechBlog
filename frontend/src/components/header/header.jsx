import './header.css'
import { useNavigate } from 'react-router-dom'



export default function Header(){

const navigate = useNavigate()
    return(
         <header className="header">
            <span>TechBlog</span>
        
            <button className="back-button" onClick={() => navigate(-1)}>↩</button>
            
        </header>
    )
}