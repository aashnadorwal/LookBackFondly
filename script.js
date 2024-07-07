document.addEventListener('DOMContentLoaded', function() {
    // Define an object with post details
    const posts = {
        'letters-from-a-stoic': {
            title: 'Letters from a Stoic by Seneca',
            category: 'Category: Philosophy',
            date: 'Published: 15 Jan 2024',
            stars: 'My rating: ★★★★★',
            content: `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. In vel magna nec nulla facilisis commodo.</p>
                <p>Aliquam erat volutpat. Praesent id gravida tortor. Sed ut sapien massa. Vivamus vehicula magna nec est semper, nec volutpat orci dictum.</p>
            `
        },
        'notes-from-underground': {
            title: 'Notes from Underground by Fyodor Dostoevsky',
            category: 'Category: Philosophy',
            date: 'Published: 15 Jan 2024',
            stars: 'My rating: ★★★☆☆',
            content: `
                <p>Sed ac dictum risus, in posuere quam. Ut fermentum enim ut sem lacinia, ac facilisis urna fermentum. Nulla facilisi. Morbi ut feugiat lorem.</p>
                <p>Fusce vestibulum augue a eros facilisis feugiat. In sit amet metus nec lectus scelerisque pellentesque.</p>
            `
        },
        'nausea': {
            title: 'Nausea by Jean-Paul Sartre',
            category: 'Category: Philosophy',
            date: 'Published: 15 Jan 2024',
            stars: 'My rating: ★★★☆☆',
            content: `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. In vel magna nec nulla facilisis commodo.</p>
                <p>Aliquam erat volutpat. Praesent id gravida tortor. Sed ut sapien massa. Vivamus vehicula magna nec est semper, nec volutpat orci dictum.</p>
            `
        },
        'the-stranger': {
            title: 'The Stranger by Albert Camus',
            category: 'Category: Literary Fiction',
            date: 'Published: 15 Jan 2024',
            stars: 'My rating: ★★★☆☆',
            content: `
                <p>Sed ac dictum risus, in posuere quam. Ut fermentum enim ut sem lacinia, ac facilisis urna fermentum. Nulla facilisi. Morbi ut feugiat lorem.</p>
                <p>Fusce vestibulum augue a eros facilisis feugiat. In sit amet metus nec lectus scelerisque pellentesque.</p>
            `
        },
        'my-body': {
            title: 'My Body by Emily Ratajkowski',
            category: 'Category: Memoir',
            date: 'Published: 15 Jan 2024',
            stars: 'My rating: ★★★☆☆',
            content: `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. In vel magna nec nulla facilisis commodo.</p>
                <p>Aliquam erat volutpat. Praesent id gravida tortor. Sed ut sapien massa. Vivamus vehicula magna nec est semper, nec volutpat orci dictum.</p>
            `
        },
        'all-about-love': {
            title: 'All About Love: New Visions by Bell Hooks',
            category: 'Category: Nonfiction Essays',
            date: 'Published: 15 Jan 2024',
            stars: 'My rating: ★★★☆☆',
            content: `
                <p>Sed ac dictum risus, in posuere quam. Ut fermentum enim ut sem lacinia, ac facilisis urna fermentum. Nulla facilisi. Morbi ut feugiat lorem.</p>
                <p>Fusce vestibulum augue a eros facilisis feugiat. In sit amet metus nec lectus scelerisque pellentesque.</p>
            `
        },
        'tuesdays-with-morrie': {
            title: 'Tuesdays with Morrie by Mitch Albom',
            category: 'Category: Memoir',
            date: 'Published: 28 Jun 2024',
            stars: 'My rating: ★★★☆☆',
            content: `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. In vel magna nec nulla facilisis commodo.</p>
                <p>Aliquam erat volutpat. Praesent id gravida tortor. Sed ut sapien massa. Vivamus vehicula magna nec est semper, nec volutpat orci dictum.</p>
            `
        },
        'ways-of-seeing': {
            title: 'Ways of Seeing by John Berger',
            category: 'Category: Nonfiction Essays',
            date: 'Published: 15 Jan 2024',
            stars: 'My rating: ★★★☆☆',
            content: `
                <p>Sed ac dictum risus, in posuere quam. Ut fermentum enim ut sem lacinia, ac facilisis urna fermentum. Nulla facilisi. Morbi ut feugiat lorem.</p>
                <p>Fusce vestibulum augue a eros facilisis feugiat. In sit amet metus nec lectus scelerisque pellentesque.</p>
            `
        },
    };

    // Get the blog post section
    const blogPostSection = document.getElementById('blog-post');

    // Get the postId from URL parameter or default to 'letters-from-a-stoic'
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post') || 'letters-from-a-stoic';
    const post = posts[postId];

    // Create HTML structure for the blog post
    const blogPostHTML = `
        <button onclick="history.go(-1);">Back</button>
        <h1>${post.title}</h1>
        <h2>${post.category}</h2>
        <h2>${post.date}</h2>
        <h2>${post.stars}</h2>
        <div class="content">
            ${post.content}
        </div>
    `;

    // Set the HTML of the blog post section
    blogPostSection.innerHTML = blogPostHTML;

    // Search Functionality
    function searchBooks() {
        var input = document.getElementById("searchInput").value.toLowerCase(); // Retrieve search input value
        var cards = document.querySelectorAll(".card"); // Get all blog post cards

        // Loop through each card
        cards.forEach(function(card) {
            var title = card.querySelector("h2").textContent.toLowerCase(); // Get the title of the current card

            // Check if the title contains the search input
            if (title.includes(input)) {
                card.style.display = ""; // Show the card
            } else {
                card.style.display = "none"; // Hide the card
            }
        });
    }

    // Event listener for the search button
    document.querySelector(".search-container button").addEventListener("click", searchBooks);

    // Event listener for search input
    document.getElementById("searchInput").addEventListener("input", searchBooks);
});
