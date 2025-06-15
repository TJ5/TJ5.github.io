import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Review {
  id: string;
  title: string;
  author: string;
  summary: string;
}

interface ReviewsProps {
  reviews: Review[];
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews, onSearch, searchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearchQuery);
  };

  return (
    <div className="reviews-page" style={{ maxWidth: 800, margin: '3em auto', color: '#fff' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2em' }}>All Reviews</h1>
      <form className="search-box" style={{ marginBottom: '2em' }} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search reviews..."
          value={localSearchQuery}
          onChange={e => setLocalSearchQuery(e.target.value)}
          style={{ padding: '0.5em', width: '70%', marginRight: '0.5em' }}
        />
        <button type="submit" style={{ padding: '0.5em 1em' }}>Search</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {reviews.map((review) => (
          <li key={review.id} style={{ marginBottom: '2em', borderBottom: '1px solid #333', paddingBottom: '1.5em' }}>
            <h2 style={{ marginBottom: '0.3em' }}>{review.title}</h2>
            <p style={{ fontStyle: 'italic', marginBottom: '0.5em' }}>by {review.author}</p>
            <p style={{ marginBottom: '0.5em' }}>{review.summary}</p>
            <Link to={`/review/${review.id}`} style={{ color: '#d4af37', textDecoration: 'underline' }}>
              Read Full Review
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews; 