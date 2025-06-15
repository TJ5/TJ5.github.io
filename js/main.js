// Sample book review data structure
const bookReviews = [
    {
        title: "The Midnight Library",
        author: "Matt Haig",
        rating: 4.5,
        date: "2024-03-20",
        summary: "A fascinating exploration of life's infinite possibilities through the lens of a library between life and death.",
        coverImage: "images/midnight-library.jpg",
        genre: "Fiction"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        rating: 5.0,
        date: "2024-03-15",
        summary: "A practical guide to breaking bad habits and building good ones through tiny changes in behavior.",
        coverImage: "images/atomic-habits.jpg",
        genre: "Self-Help"
    },
    {
        title: "Project Hail Mary",
        author: "Andy Weir",
        rating: 4.8,
        date: "2024-03-10",
        summary: "An astronaut wakes up alone on a spacecraft with no memory of how he got there.",
        coverImage: "images/project-hail-mary.jpg",
        genre: "Sci-Fi"
    }
];

// Function to create a book review card
function createReviewCard(review, isFeatured = false) {
    return `
        <article class="review-card ${isFeatured ? 'featured' : ''}">
            <div class="book-cover">
                <img src="${review.coverImage}" alt="${review.title} cover">
            </div>
            <div class="review-content">
                <h3>${review.title}</h3>
                <p class="author">by ${review.author}</p>
                <div class="rating">
                    ${createStarRating(review.rating)}
                </div>
                <p class="summary">${review.summary}</p>
                <p class="date">Reviewed on ${formatDate(review.date)}</p>
                <span class="genre">${review.genre}</span>
            </div>
        </article>
    `;
}

// Function to create star rating
function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to load featured review
function loadFeaturedReview() {
    const featuredCard = document.querySelector('.featured-card');
    if (featuredCard && bookReviews.length > 0) {
        featuredCard.innerHTML = createReviewCard(bookReviews[0], true);
    }
}

// Function to load recent reviews
function loadRecentReviews() {
    const reviewsGrid = document.querySelector('.reviews-grid');
    if (reviewsGrid) {
        // Skip the first review as it's featured
        const recentReviews = bookReviews.slice(1);
        reviewsGrid.innerHTML = recentReviews.map(review => createReviewCard(review)).join('');
    }
}

// Function to load recent posts in sidebar
function loadRecentPosts() {
    const recentPostsList = document.querySelector('.recent-posts');
    if (recentPostsList) {
        recentPostsList.innerHTML = bookReviews
            .slice(0, 5)
            .map(review => `
                <li>
                    <a href="#${review.title.toLowerCase().replace(/\s+/g, '-')}">
                        ${review.title}
                        <span class="rating">${createStarRating(review.rating)}</span>
                    </a>
                </li>
            `)
            .join('');
    }
}

// Function to handle search
function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');

    if (searchInput && searchButton) {
        const handleSearch = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredReviews = bookReviews.filter(review => 
                review.title.toLowerCase().includes(searchTerm) ||
                review.author.toLowerCase().includes(searchTerm) ||
                review.summary.toLowerCase().includes(searchTerm)
            );

            const reviewsGrid = document.querySelector('.reviews-grid');
            if (reviewsGrid) {
                reviewsGrid.innerHTML = filteredReviews.map(review => createReviewCard(review)).join('');
            }
        };

        searchButton.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedReview();
    loadRecentReviews();
    loadRecentPosts();
    setupSearch();
}); 