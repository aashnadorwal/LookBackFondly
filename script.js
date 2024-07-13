// Blog Post Data

document.addEventListener('DOMContentLoaded', function() {
    const posts = {
        'letters-from-a-stoic': {
            title: 'Letters from a Stoic by Seneca',
            category: 'Category: Philosophy',
            date: 'Published: 28 Jun 2024',
            stars: 'Stars: ★★★★★',
            content: `
                <h4>
                This book holds a special place in my heart because each time I read it, it feels like I'm discovering it all over again. I find myself uncovering new layers of meaning that I had previously overlooked. My interpretations have evolved with each read, influenced by how I've changed as a person over the years. I noticed that different sections began to stand out, resonating with the new perspectives and understanding I had gained. Seneca's words are as relevant today as they were when he wrote them. This book conatins 124 letters written by the Roman philosopher Lucius Annaeus Seneca to his friend and disciple, Lucilius. In my opinion, this book is a must-read for anyone interested in stoicism, philosophy, or simply seeking a deeper understanding of how to live a meaningful life.
                </h4>
                <h3>MY NOTES:</h3>
                <p>You should neither become like the bad because they are many, nor be an enemy of the many because they are unlike you. Retire into yourself, as far as you can. Associate with people who are likely to improve you. Welcome those whom you are capable of improving. The process is mutual one: men learn as they teach.</p>
                <p>Happy the man who improves other people not merely when he is in their presence but even when he is in their thoughts! And happy, too, is he who can so improve himself as not to be thrown into confusion by the thoughts of others.</p>
                <p>Choose someone whose way of life as well as words, and whose very face as mirroring the character that lies behind it, have won your approval.</p>
                <p>If you shape your life according to nature, you will never be poor; if according to people's opinions, you will never be rich. Nature's wants are small, while those of opinion are limitless.</p>
                <p>Do you think you are the only person to have had this experience? Are you really surprised, as if it were something unprecedented, that so long a tour and such diversity of scene have not enabled you to throw off this melancholy and this feeling of depression?</p>
                <p>How can you wonder your travels do you no good, when you carry yourself around with you? You are saddled with the very thing that drove you away.</p>
                <p>All that dashing about turns out to be quite futile. And if you want to know why all this running away cannot help you, the answer is simply this: you are running away in your own company.</p>
                <p>We should all live with the conviction: "I wasn't born for one particular corner; the whole world's my home country."</p>
                <p>For a person who is not aware that he is doing anything wrong has no desire to be put right. You have to catch yourself doing it before you can reform. So - to the best of your ability - demonstrate your own guilt, conduct inquiries of your own into all the evidence against yourself. Play the part first of prosecutor, then judge and finally of pleader in mitigation. Be harsh with yourself at times. </p>
                <p>A woman is not beautiful when her ankle or arm wins compliments, but when her total appearance diverts admiration from the individual parts of her body. </p>
                <p>No one should feel pride in anything that is not his own. Suppose he has a beautiful home and a handsome collection of servants, a lot of land under cultivation and a lot of money out at interest; not one of those things can be said to be in him - they are just things around him. Praise in him what can neither be given nor snatched away, what is peculiarly a man's.</p>
                <p>Show me a man who isn't a slave; one is a slave to sex, another to money, another to ambition; all are slaves to hope or fear.</p>
                <p>What in fact makes people who are morally unenlightened upset by the experience of physical distress is their failure to acquire their habit of contentment with the spirit. They have instead been preoccupied by the body. That is why a man of noble and enlightened character separates body from spirit and has just as much to do with the former, the frail and complaining part of our nature, as is necessary and no more, and a lot to do with the better, the divine element.</p>
                <p>So long as you carry the sources of your troubles about with you, those troubles will continue to harass and plague you wherever you wander on land or on sea. Does it surprise you that running away doesn't do you any good? The things you're running away from are with you all the time.</p>
                <p>If you wish to be stripped of your vices you must get right away from the examples others set of them. The miser, the swindler, the bully, the cheat, who would do you a lot of harm by simply being near you, are actually within you. Move to better company.</p>
                <p>People who know no self-restraint lead stormy and disordered lives, passing their time in a state of fear commensurate with the injuries they do to others, never able to relax. After every act they tremble, paralyzed, their consciences continually demanding an answer, not allowing them to get on with other things. To expect punishment is to suffer it; and to earn it is to expect it. A guilty person sometimes has the luck to escape detection, but never to feel sure of it.</p>
                <p>No man's good by accident. Virtue has to be learnt. Pleasure is a poor and petty thing. No value should be set on it: it's something we share with dumb animals - the minutest and most insignificant creatures scutter after it. Glory's an empty, changeable thing, as fickle as the weather. Poverty's no evil to anyone unless he kicks against it. Death is not an evil. What is it then? The one law mankind has that is free of all discrimination. Superstition is an idiotic heresy: it fears those it should love: it dishonours those it worships. For what difference does it make whether you deny the gods or bring them into disrepute?</p>
                <p>Philosophy has no business to supply vice with excuses; a sick man who is encouraged to live in a reckless manner by his doctor has not a hope of getting well.</p>
                </p>
            `
        },
        'notes-from-underground': {
            title: 'Notes from Underground by Fyodor Dostoevsky',
            category: 'Category: Philosophy',
            date: 'Published: 15 Jan 2024',
            stars: 'Stars: ★★★★★',
            content: `
                <h4></h4>
                <h3>MY NOTES:</h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            `
        },
        'nausea': {
            title: 'Nausea by Jean-Paul Sartre',
            category: 'Category: Philosophy',
            date: 'Published: 15 Jan 2024',
            stars: 'Stars: ★★★★★',
            content: `
                <h4></h4>
                <h3>MY NOTES:</h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            `
        },
        'the-stranger': {
            title: 'The Stranger by Albert Camus',
            category: 'Category: Literary Fiction',
            date: 'Published: 15 Jan 2024',
            stars: 'Stars: ★★★☆☆',
            content: `
                <h4></h4>
                <h3>MY NOTES:</h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            `
        },
        'my-body': {
            title: 'My Body by Emily Ratajkowski',
            category: 'Category: Memoir',
            date: 'Published: 15 Jan 2024',
            stars: 'Stars: ★★★★☆',
            content: `
                <h4></h4>
                <h3>MY NOTES:</h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            `
        },
        'all-about-love': {
            title: 'All About Love: New Visions by Bell Hooks',
            category: 'Category: Nonfiction Essays',
            date: 'Published: 15 Jan 2024',
            stars: 'Stars: ★★★☆☆',
            content: `
                <h4></h4>
                <h3>MY NOTES:</h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            `
        },
        'tuesdays-with-morrie': {
            title: 'Tuesdays with Morrie by Mitch Albom',
            category: 'Category: Memoir',
            date: 'Published: 28 Jun 2024',
            stars: 'Stars: ★★★☆☆',
            content: `
                <h4></h4>
                <h3>MY NOTES:</h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            `
        },
        'ways-of-seeing': {
            title: 'Ways of Seeing by John Berger',
            category: 'Category: Nonfiction Essays',
            date: 'Published: 15 Jan 2024',
            stars: 'Stars: ★★★☆☆',
            content: `
                <h4></h4>
                <h3>MY NOTES:</h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            `
        },
    };

    const blogPostSection = document.getElementById('blog-post');

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post') || 'letters-from-a-stoic';
    const post = posts[postId];

    const blogPostHTML = `
        <button onclick="history.go(-1);">Back</button>
        <h1>${post.title}</h1>
        <h2>${post.stars}</h2>
        <h2>${post.category}</h2>
        <h2>${post.date}</h2>
        <div class="content">
            ${post.content}
        </div>
    `;

    blogPostSection.innerHTML = blogPostHTML;

    // Search Functionality
    function searchBooks() {
        var input = document.getElementById("searchInput").value.toLowerCase(); // Retrieve search input value
        var cards = document.querySelectorAll(".card"); // Get all blog post cards

        // Loop through each card
        cards.forEach(function(card) {
            var title = card.querySelector("h2").textContent.toLowerCase(); // Get the title of the current card

            // Checks if the title contains the search input
            if (title.includes(input)) {
                card.style.display = ""; // Shos the card
            } else {
                card.style.display = "none"; // Hides the card
            }
        });
    }

    // Event listener for the search button
    document.querySelector(".search-container button").addEventListener("click", searchBooks);

    // Event listener for search input
    document.getElementById("searchInput").addEventListener("input", searchBooks);
});
