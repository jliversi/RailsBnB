import React from 'react';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const review = this.props.review;

    return (
      <div className="review-list-item">
        <div className="review-details">
          <img src="assets/rails_bnb.ico" alt=""/>
          <div className="author-details">
            <h1>{review.author_name}</h1>
            <p>{review.month} {review.year}</p>
          </div>
        </div>
        <div className='review-body'>
          <p>{review.body}</p>
        </div>
      </div>
    )
  }
}


export default ReviewListItem;