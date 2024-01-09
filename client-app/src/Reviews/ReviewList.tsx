import React from 'react';
import { Link } from 'react-router-dom';

interface ReviewListProps {
  reviews: Array<{
    Id: number;
    Rating: number;
    Comment: string;
  }>;
  onUpdateReview: (id: number) => void;
  onDeleteReview: (id: number) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onUpdateReview, onDeleteReview }) => {
  return (
    <div className="container" style={{ backgroundColor: "#222831", color: "#EEEEEE", padding: "20px" }}>
      <table className="table">
        <thead>
          <tr>
            <th style={{ backgroundColor: "#222831", color: "white" }}>#</th>
            <th style={{ backgroundColor: "#222831", color: "white" }}>Rating</th>
            <th style={{ backgroundColor: "#222831", color: "white" }}>Comment</th>
            <th style={{ backgroundColor: "#222831", color: "white" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.Id}>
              <td style={{ backgroundColor: "#222831", color: "white" }}>{review.Id}</td>
              <td style={{ backgroundColor: "#222831", color: "white" }}>{review.Rating}</td>
              <td style={{ backgroundColor: "#222831", color: "white" }}>{review.Comment}</td>
              <td style={{ backgroundColor: "#222831", color: "white" }}>
                <Link to={`/UpdateReview/${review.Id}`}>
                  <button className="btn btn-primary mx-4" onClick={() => onUpdateReview(review.Id)}>
                    Update
                  </button>
                </Link>
                <button className="btn btn-primary" onClick={() => onDeleteReview(review.Id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewList;
