import {loadPosts, CreatenewPostSend , loadComments} from './api.js';
import { createElementComments , createElementPost} from './dom.js';

const postTitle = document.querySelector('#post_title');
const addPost = document.querySelector('#add_post');
const postList = document.querySelector('#posts_list');
const postBody = document.querySelector('#post_body')

addPost.addEventListener('click', async (event) => {
    event.preventDefault();

    const title = postTitle.value.trim();
    const body = postBody.value.trim();

    if (title === '' || body === '') {
        console.log('Fill in the input field');
        return;
    }

    try {
        const data = await CreatenewPostSend(title, body);

        if (!data) {
            return;
        }

        const newPostElement = createElementPost(data, loadCommentsCallback);
        postList.prepend(newPostElement);
    } catch (err) {
        console.error('Error creating post:', err);
    }

    postTitle.value = '';
    postBody.value = '';
});

async function loadPostsCallback() {
    const posts = await loadPosts();

    posts.forEach(post => {
        const postElement = createElementPost(post, loadCommentsCallback);
        postList.appendChild(postElement);
    });
}

async function loadCommentsCallback(postId, postElement) {
    const existingCommentsList = postElement.querySelector('.comments_list');
    if (existingCommentsList) {
        return; 
    }

    try {
        const comments = await loadComments(postId);
        const commentsList = document.createElement('ul');
        commentsList.className = 'comments_list';

        comments.forEach(comment => {
            const commentElement = createElementComments(comment);
            commentsList.appendChild(commentElement);
        });

        postElement.appendChild(commentsList);
    } catch (error) {
        console.error('Error loading comments:', error);
    }
}

loadPostsCallback();