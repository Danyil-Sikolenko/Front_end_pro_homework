const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
const postTitle = document.querySelector('#post_title');
const addPost = document.querySelector('#add_post');
const postList = document.querySelector('#posts_list');
const form = document.querySelector('#form');
const postBody = document.querySelector('#post_body')


function CreatenewPostSend(title, body) {
    const newPost = {
        title: title,
        body: body,
        userId: Math.random()
    }

    const URL_GET = 'https://jsonplaceholder.typicode.com/posts';
    return fetch(URL_GET, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost)
    })
        .then((res) => {
            if (!res.ok) {
                console.log('ERORRE!!!! Post is not Defined')
            }
            return res.json()
        })

};

addPost.addEventListener('click', (event) => {
    event.preventDefault();

    const title = postTitle.value.trim();
    const body = postBody.value.trim();

    if (title === '' || body === '') {
        console.log('Fill in the input field')
        return;
    }

    CreatenewPostSend(title, body)
        .then((data) => {
            if (!data) {
                return
            }
            const newPostElement = createElementPost(data);
            postList.prepend(newPostElement);
        })
        .catch((err) => {
            console.error(err)
        })
    postTitle.value = ''
    postBody.value = ''
})


function loadPosts() {
    fetch(API_URL)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed Load Posts!')
            }
            return res.json()
        })
        .then((posts) => {
            posts.forEach(post => {
                const li = createElementPost(post);
                postList.appendChild(li)
                console.log(post)
            });
        })
        .catch((err) => {
            console.log(err)
        })
}
loadPosts()


function createElementPost(post) {
    const li = document.createElement('li');
    li.className = 'posts_item';

    li.innerHTML = `<h3>${post.title}</h3><br>
    <p>${post.body}</p><br> 
    <button class='add_comments'>Завантажити коментарі</button>`;

    const addCommentsBtn = li.querySelector('.add_comments');

    addCommentsBtn.addEventListener('click', () => {
        loadComments(post.id, li);
        addCommentsBtn.classList.toggle('none')
    });

    return li;
}


function loadComments(postId, postElement) {
    const existingCommentsList = postElement.querySelector('.comments_list');
    if (existingCommentsList) {
        return;
    }
    const URL_COMMENTS = `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`;
    fetch(URL_COMMENTS)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Comments are not defined');
            }
            return res.json();
        })
        .then((comments) => {
            const commentsList = document.createElement('ul');
            commentsList.className = 'comments_list';

            comments.forEach((comment) => {
                const commentElement = createElementComments(comment);
                commentsList.appendChild(commentElement);
            });
            postElement.appendChild(commentsList);
        })
        .catch((err) => {
            console.error(err.message);
        });
}


function createElementComments(comment) {
    const commentsItem = document.createElement('li');
    commentsItem.innerHTML = `
        <h3>${comment.name}</h3><br>
        <a href= ''>${comment.email}</a><br>
        <p>${comment.body}</p>`;
    return commentsItem;
}










