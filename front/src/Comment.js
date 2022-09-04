export const Comment = Comment => {
    return (
        <div>
            <p>{Comment.id} {Comment.content}</p>
            <p>作成日 {Comment.created_at}</p>
        </div>
    )
}
