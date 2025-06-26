import React from 'react';
import image from '../assets/newst.jpg'; // Fallback image
import '../App.css'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div 
      className="card news-card text-light mb-3 d-inline-block" 
      style={{
        maxWidth: '345px',
        minHeight: '480px',
        borderRadius: '15px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        backgroundColor: '#25273c',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      <img 
        src={src || image} 
        alt="News" 
        className="card-img-top" 
        style={{
          height: '200px',
          width: '100%',
          objectFit: 'cover',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
        }} 
      />
      <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h5 
          className="card-title" 
          style={{
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '1.4',
            color: '#fff',
            marginBottom: '10px',
          }}
        >
          {title.slice(0, 50)}{title.length > 50 ? '...' : ''}
        </h5>
        <p 
          className="card-text" 
          style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#bdbdbd',
            flex: 1,
          }}
        >
          {description 
            ? description.slice(0, 90) + (description.length > 90 ? '...' : '') 
            : 'Connecting you to the stories that matter most. From local highlights to global events, we bring the world closer.'}
        </p>
        <a 
          href={url} 
          className="btn btn-primary mt-3" 
          style={{
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            borderRadius: '20px',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'uppercase',
            alignSelf: 'center',
          }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
