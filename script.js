document.addEventListener('DOMContentLoaded', function() {
    const posts = {
        'letters-from-a-stoic': {
            title: 'Letters from a Stoic by Seneca',
            date: '28 Jun 2024',
            category: 'Philosophy',
            image: 'assets/lettersfromastoic.jpeg',
            content: `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. In vel magna nec nulla facilisis commodo.</p>
                <p>Aliquam erat volutpat. Praesent id gravida tortor. Sed ut sapien massa. Vivamus vehicula magna nec est semper, nec volutpat orci dictum.</p>
            `
        },
        'notes-from-underground': {
            title: 'Notes from Underground by Fyodor Dostoevsky',
            date: '28 Jun 2024',
            category: 'Philosophy',
            image: 'assets/notesfromunderground.jpg',
            content: `
                <p>Sed ac dictum risus, in posuere quam. Ut fermentum enim ut sem lacinia, ac facilisis urna fermentum. Nulla facilisi. Morbi ut feugiat lorem.</p>
                <p>Fusce vestibulum augue a eros facilisis feugiat. In sit amet metus nec lectus scelerisque pellentesque.</p>
            `
        },
        // Add more posts here...
    };

    function getPostId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('post');
    }

    function loadPost(postId) {
        const post = posts[postId];
        if (post) {
            document.getElementById('post-title').textContent = post.title;
            document.getElementById('post-date').textContent = `Published - ${post.date}`;
            document.getElementById('post-category').innerHTML = `<b>${post.category}</b>`;
            document.getElementById('post-content').innerHTML = post.content;
        } else {
            document.getElementById('post-title').textContent = 'Post not found';
            document.getElementById('post-content').innerHTML = '<p>The requested post could not be found.</p>';
        }
    }

    const postId = getPostId();
    loadPost(postId);
});