document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <h4>By: ${post.username}</h4>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postDiv);
    });

    document.getElementById('back-btn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    document.getElementById('toggle-theme').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
