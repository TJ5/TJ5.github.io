import React from 'react';
import aboutBody from '../about/about-body.txt?raw';

const About: React.FC = () => {
  const renderParagraphs = (text: string) =>
    text.split('\n').map((para, idx) =>
      para.trim() ? (
        <p key={idx} style={{ textIndent: '2em', marginBottom: '1em' }}>{para}</p>
      ) : null
    );

  return (
    <div className="about-page" style={{ maxWidth: 700, margin: '3em auto', color: '#fff' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5em' }}>About Me</h1>
      {renderParagraphs(aboutBody)}
    </div>
  );
};

export default About; 