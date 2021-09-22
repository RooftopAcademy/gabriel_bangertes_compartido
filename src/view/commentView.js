function commentView(comment) {
    return `
    <div class="d-flex fd-column comment">
        <div><b>${comment.name}</b> - <i>${comment.email}</i>
        <div><p>${comment.body}</p>
    </div>`
}