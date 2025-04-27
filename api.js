import { URL_GET , API_URL } from './config.js';

export async function loadPosts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to load posts!');
        }

        return await response.json();
    } catch (err) {
        console.error('Error loading posts:', err);
    }
}


export async function CreatenewPostSend(title, body) {
    const newPost = {
        title: title,
        body: body,
        userId: Math.random()
    };

    try {
        const response = await fetch(URL_GET, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });

        if (!response.ok) {
            console.error('ERROR!!!! Post is not Defined');
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


export async function loadComments(postId) {
    const URL_COMMENTS = `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`;

    try {
        const response = await fetch(URL_COMMENTS);

        if (!response.ok) {
            throw new Error('Comments are not defined');
        }

        return await response.json();
    } catch (err) {
        console.error('Error loading comments:', err);
    }
}