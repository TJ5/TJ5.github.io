import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { reviews } from '../data/reviews';

interface SidebarProps {
    onSearch: (query: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    // Sort reviews by date and get the 3 most recent
    const recentReviews = [...reviews]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    };

    return (
        <aside className="sidebar">
            <nav className="main-nav">
                <ul>
                    <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
                    <li><Link to="/reviews"><i className="fas fa-book"></i> Reviews</Link></li>
                    <li><Link to="/about"><i className="fas fa-user"></i> About Me</Link></li>
                </ul>
            </nav>

            <div className="sidebar-section">
                <h3>Recent Posts</h3>
                <ul className="recent-posts">
                    {recentReviews.map((review) => (
                        <li key={review.id}>
                            <Link to={`/review/${review.id}`}>
                                <strong>{review.title}</strong> - {formatDate(review.date)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>Search</h3>
                <form className="search-box" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search reviews..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ padding: '0.5em', width: '70%', marginRight: '0.5em' }}
                    />
                    <button 
                        type="submit"
                        style={{
                            padding: '0.5em 1em',
                            backgroundColor: '#d4af37',
                            color: '#000',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Search
                    </button>
                </form>
            </div>
        </aside>
    );
};

export default Sidebar; 