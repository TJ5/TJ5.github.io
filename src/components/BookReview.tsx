import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BookReviewProps {
    id: string;
    title: string;
    author: string;
    rating: number;
    date: string;
    summary: string;
    coverImage: string;
    isFeatured?: boolean;
}

const BookReview: React.FC<BookReviewProps> = ({
    id,
    title,
    author,
    rating,
    date,
    summary,
    coverImage,
    isFeatured = false
}) => {
    const navigate = useNavigate();

    const createStarRating = (rating: number) => {
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
    };

    const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    return (
        <article 
            className={`review-card ${isFeatured ? 'featured' : ''}`}
            onClick={() => navigate(`/review/${id}`)}
            style={{ cursor: 'pointer' }}
        >
            <div className="book-cover">
                <img src={coverImage} alt={`${title} cover`} />
            </div>
            <div className="review-content">
                <h3>{title}</h3>
                <p className="author">by {author}</p>
                <div 
                    className="rating"
                    dangerouslySetInnerHTML={{ __html: createStarRating(rating) }}
                />
                <p className="summary">{summary}</p>
                <p className="date">Reviewed on {formatDate(date)}</p>
            </div>
        </article>
    );
};

export default BookReview; 