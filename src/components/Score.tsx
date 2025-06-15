import React from 'react';

interface ScoreProps {
  score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => (
  <div style={{
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '2em 0 1em 0',
    letterSpacing: '0.05em',
  }}>
    <span style={{ fontSize: '1.5rem', fontWeight: 'normal', marginRight: '0.5em' }}>Score:</span>
    {score} <span style={{ fontSize: '1.5rem', fontWeight: 'normal' }}>/ 10</span>
  </div>
);

export default Score; 