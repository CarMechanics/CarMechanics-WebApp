import React, { useState } from 'react';

interface Review {
  Id: number;
  Rating: number;
  Comment: string;
}

interface ReviewPageProps {
  reviews: Review[];
  onAddReview: (review: Review) => void;
  onUpdateReview: (id: number, updatedReview: Review) => void;
}


const Review: React.FC<ReviewPageProps> = ({ reviews, onAddReview, onUpdateReview }) => {
  const [newReview, setNewReview] = useState<Review>({ Id: 0, Rating: 0, Comment: '' });

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewReview({ ...newReview, Rating: Number(event.target.value) });
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview({ ...newReview, Comment: event.target.value });
  };

  const addReview = () => {
    // Generate a unique ID (replace this logic with your actual ID generation)
    const newId = Math.max(...reviews.map((review) => review.Id), 0) + 1;
    const newReviewWithId = { ...newReview, Id: newId };
    onAddReview(newReviewWithId);
    setNewReview({ Id: 0, Rating: 0, Comment: '' });
  };
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url('/mas.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#EEEEEE', // Adaugă culoarea textului pentru a se potrivi cu fundalul
  };

  return (
    <div style={containerStyle}>
      <h1>Review Page</h1>
      <div>
        <h2>Add a Review</h2>
        <label>
          Rating:
          <select value={newReview.Rating} onChange={handleRatingChange}>
            <option value={0}>Select Rating</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </label>
        <br />
        <label>
          Comment:
          <textarea value={newReview.Comment} onChange={handleCommentChange} />
        </label>
        <br />
        <button onClick={addReview}>Add Review</button>
      </div>

      <div>
        <h2>Existing Reviews</h2>
        {reviews.map((review) => (
          <div key={review.Id}>
            <span>{`Rating: ${review.Rating}, Comment: ${review.Comment}`}</span>
            <button onClick={() => onUpdateReview(review.Id, { ...review, Rating: review.Rating + 1 })}>
              Update Rating
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
