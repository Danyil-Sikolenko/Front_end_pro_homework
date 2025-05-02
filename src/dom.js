export function createElementComments(comment) {
    const commentsItem = document.createElement('li');
    commentsItem.innerHTML = `
        <h3>${comment.name}</h3><br>
        <a href= ''>${comment.email}</a><br>
        <p>${comment.body}</p>`;
    return commentsItem;
}

export function createElementPost(post, loadCommentsCallback) {
    const li = document.createElement('li');
    li.className = 'posts_item';

    li.innerHTML = `<h3>${post.title}</h3><br>
    <p>${post.body}</p><br> 
    <button class='add_comments'>Завантажити коментарі</button>`;

    const addCommentsBtn = li.querySelector('.add_comments');
    addCommentsBtn.addEventListener('click', () => {
        loadCommentsCallback(post.id, li);
        addCommentsBtn.classList.toggle('none');
    });

    return li;
}