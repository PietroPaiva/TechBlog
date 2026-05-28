import {Link} from 'react-router-dom'
import './welcome.css'

export default function Welcome(){

   return(
      <main className="welcome-page">
         <section className="welcome-hero">
            <h1>Insights & Learning</h1>
            <p>Explorando tendências Tech, um post por vez</p>

            <Link className="welcome-button" to="/login">
               Começar a ler
            </Link>
         </section>
      </main>
   )
}
