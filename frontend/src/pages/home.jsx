const articles = [
  {
    id: 1,
    title: 'React Basics',
    author: 'Pietro',
    tags:'Frontend'
  },
  {
    id: 2,
    title: 'Express API',
    author: 'Maria',
    tags:'Backend'
  }
]




export default function Home(){

    return(
        <>
        {articles.map(article => (
            <div key={article.id}>
                <h2>{article.title}</h2>
            </div>
        ))}
  
    </>

    )
}