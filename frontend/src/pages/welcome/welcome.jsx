import {Link} from 'react-router-dom'

export default function Welcome(){

   return(
   <>
    <h1>Insights & Learning</h1>
    <h2>Explorando tendencias tech, um post por vez</h2>
    
    
    <Link to="/login">
    <button>Comecar a ler</button>
    </Link>

    
   </>
   )
}

