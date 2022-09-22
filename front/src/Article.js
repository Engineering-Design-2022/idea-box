import './Article.css'

export const Article = (props) => {
    const { title, id, description, deadline, created_at } = props.content
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
                        <td>{id}</td><td>{title}</td><td>{description}</td>
                    </tr>
                </tbody>
            </table>
            <p>締切 {deadline}  /  作成日 {created_at}</p>
        </div>

    );
}
