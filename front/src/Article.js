export const Article = Article => {
    return (
        <div>
            <h1>{Article.id} {Article.title}の詳細ページです</h1>
            <p>{Article.description}</p>
            <p>締切 {Article.deadline}  /  作成日 {Article.created_at}</p>
        </div>
    )
}
