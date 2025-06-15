import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { reviews } from '../data/reviews';
import Score from './Score';
import BookMeta from './BookMeta';

const FullReview: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const book = reviews.find(review => review.id === id);

    if (!book) {
        return (
            <div className="full-review">
                <button className="back-button" onClick={() => navigate('/')}>
                    <i className="fas fa-arrow-left"></i> Back to Reviews
                </button>
                <div className="error-message">Review not found</div>
            </div>
        );
    }

    console.log(book.coverImage);

    const renderParagraphs = (text?: string) =>
        text?.split('\n').map((para, idx) =>
            para.trim() ? (
                <p key={idx} style={{ textIndent: '2em', marginBottom: '1em' }}>{para}</p>
            ) : null
        );

    return (
        <div className="full-review">
            <button className="back-button" onClick={() => navigate('/')}>
                <i className="fas fa-arrow-left"></i> Back to Reviews
            </button>
            
            <article className="review-content">
                <div className="book-header">
                    <div className="book-cover">
                        <img src={book.coverImage} alt={`${book.title} cover`} />
                    </div>
                    <div className="book-info">
                        <h1>{book.title}</h1>
                        <BookMeta 
                          author={book.author}
                          publisher={book.publisher}
                          publishDate={book.publishDate}
                          reviewDate={book.date}
                        />
                        <div className="rating">
                            {[...Array(5)].map((_, i) => (
                                <i 
                                    key={i} 
                                    className={`fas fa-star ${i < Math.floor(book.rating) ? 'filled' : ''}`}
                                />
                            ))}
                            {book.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                        </div>
                    </div>
                </div>
                
                <div className="review-text">
                    <h2>Review</h2>
                    {renderParagraphs(book.fullReview)}
                    
                    {book.spoilers && (
                        <div className="spoilers-section">
                            <h2>Spoilers</h2>
                            {renderParagraphs(book.spoilers)}
                        </div>
                    )}
                    
                    {book.finalThoughts && (
                        <div className="final-thoughts">
                            <h2>Final Thoughts</h2>
                            {renderParagraphs(book.finalThoughts)}
                        </div>
                    )}
                </div>
                <Score score={Math.round(book.rating)} />
            </article>
        </div>
    );
};

export default FullReview; 