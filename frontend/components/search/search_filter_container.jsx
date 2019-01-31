import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spots_actions';
import SearchFilterButtons from './search_filter_buttons';

const msp = (state, ownProps) => {
  return {
    currentParams: state.search
  }
}

const mdp = dispatch => {
  return {
    fetchSpots: (params) => dispatch(fetchSpots(params))
  }
}

export default connect(msp, mdp)(SearchFilterButtons);