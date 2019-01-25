import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import spotsReducer from './entities/spots_reducer';
import photosReducer from './entities/photos_reducer';
import bookingsReducer from './entities/bookings_reducer';
import amenitiesReducer from './entities/amenities_reducer';
import reviewsReducer from './entities/reviews_reducer';

export default combineReducers({
  users: usersReducer,
  spots: spotsReducer,
  photos: photosReducer,
  bookings: bookingsReducer,
  amenities: amenitiesReducer,
  reviews: reviewsReducer
});
