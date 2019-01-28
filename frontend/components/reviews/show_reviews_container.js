import { connect } from 'react-redux';
import ShowReviews from './show_reviews';

const msp = (state, ownProps) => {
  const reviews = ownProps.reviews;
  const spot = ownProps.spot;
  return {
    spot,
    reviews
  };
};


export default connect(msp)(ShowReviews);