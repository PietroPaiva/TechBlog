import articles from '../../pages/data.jsx'
import './tags.css'

export default function Tags(){

    const data = articles()

    return(
        <>
        <h1>Tags</h1>
        
        <div id='buttonContainer'>
            <button className='buttonTag'> Frontend</button>
            <button className='buttonTag'>Backend</button>
            <button className='buttonTag'>Mobile</button>
            <button className='buttonTag'>DevOps</button>
            <button className='buttonTag'>AI</button>
        </div>
        
        </>
    )

}
