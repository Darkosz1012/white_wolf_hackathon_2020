import React, {useEffect} from 'react';
// import '../styles/pages/HomePage.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMock } from '../actions/mockAction';

const HomePage = props => {

  useEffect(() => {
    props.fetchMock();
  }, []);

  const items = props.mock ? props.mock.map(item => (
    <div key={item.login.uuid}>{item.name.first}</div>
  )) : [];
  return(
    <div className="home">
      Home Page
      {items}
    </div>
  );
}

HomePage.propTypes = {
  fetchMock: PropTypes.func.isRequired,
  mock: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  mock: state.mock.mock
}); 

export default connect(mapStateToProps, { fetchMock })(HomePage);
