import React, { useState } from 'react';

interface StarRatingProps {
  totalStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{
            cursor: 'pointer',
            color: index < rating ? '#ffd700' : '#808080',
            fontSize: '24px',
          }}
        >
          &#9733;
        </span>
      ))}
      <p>Rating: {rating} / {totalStars}</p>
    </div>
  );
};

export default StarRating;
