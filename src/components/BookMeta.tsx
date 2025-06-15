import React from 'react';

interface BookMetaProps {
  author: string;
  publisher: string;
  publishDate: string;
  reviewDate: string;
}

const formatMonthYear = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('default', { month: 'long', year: 'numeric' });
};

const BookMeta: React.FC<BookMetaProps> = ({ author, publisher, publishDate, reviewDate }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '1.5em 0 2em 0',
    fontSize: '1.1rem',
    color: '#ccc',
    gap: '0.3em',
  }}>
    <div><strong>Author:</strong> {author}</div>
    <div><strong>Publisher:</strong> {publisher}</div>
    <div><strong>Published:</strong> {publishDate}</div>
    <div><strong>Review Date:</strong> {formatMonthYear(reviewDate)}</div>
  </div>
);

export default BookMeta; 