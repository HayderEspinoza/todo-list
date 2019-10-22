import { connect } from 'react-redux';
import Home from './Home';
// import { logIn } from './../../store/authentication/actions/index';
// import selectors from './../../store/authentication/reducers/selectors';

const mapStateToProps = state => {
  // const selector = selectors(state);
  // const session = selector.getSession();
  // const tokenStatus = selector.getStatusToken();
  // return { session, tokenStatus };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchLogin: data => dispatch(logIn(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
