import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BookReview from './components/BookReview';
import FullReview from './components/FullReview';
import Footer from './components/Footer';
import { reviews } from './data/reviews';
import About from './components/About';
import Reviews from './components/Reviews';
import './App.css';

const App: React.FC = () => {
    const [activeSearchQuery, setActiveSearchQuery] = React.useState('');

    const handleSearch = (query: string) => {
        setActiveSearchQuery(query);
    };

    // Sort reviews by date (newest first) and then filter by search
    const filteredReviews = [...reviews]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .filter(review => 
            activeSearchQuery.trim() === '' ||
            review.title.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
            review.author.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
            review.summary.toLowerCase().includes(activeSearchQuery.toLowerCase())
        );

    return (
        <Router basename="/">
            <div className="app">
                <Header />
                <div className="container">
                    <Sidebar onSearch={handleSearch} />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={
                                <div>
                                    <div className="reviews-grid">
                                        {filteredReviews.map((review) => (
                                            <BookReview key={review.id} {...review} />
                                        ))}
                                    </div>
                                </div>
                            } />
                            <Route path="/reviews" element={<Reviews reviews={filteredReviews} onSearch={handleSearch} searchQuery={activeSearchQuery} />} />
                            <Route path="/review/:id" element={<FullReview />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App; 