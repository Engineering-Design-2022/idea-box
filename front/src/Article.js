import './Article.css'


export const Article = Article => {
    return (
        <div>
            <table className="content">
                <thead>
                    <tr>
                        <th>ID</th><th>タイトル</th><th>説明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Article.id}</td><td>{Article.title}</td><td>{Article.description}</td>
                    </tr>
                </tbody>
            </table>
            <p>締切 {Article.deadline}  /  作成日 {Article.created_at}</p>
        </div>

    );
}
