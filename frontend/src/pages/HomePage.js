import React, {useEffect} from 'react';
// import '../styles/pages/HomePage.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMock } from '../actions/mockAction';
import { fetchUser } from '../actions/userActions';
import LoginComponent from '../components/LoginComponent';
import CardComponent from '../components/CardComponent';
import CardForm from '../components/CardForm';
import MatchSummaryComponent from '../components/MatchSummaryComponent';

const HomePage = props => {

  useEffect(() => {
    props.fetchMock();
  }, []);

  const items = props.mock ? props.mock.map(item => (
    <div key={item.login.uuid}>{item.name.first}</div>
  )) : [];

  const handleUserFetch = () => {
    props.fetchUser();
  }

  var arr=[{name:"Bieganie"}, {name:"Piłka nożna"}, {name:"Strzelectwo"}]

  return(
    <div className="home">
      Home Page
      <button onClick={handleUserFetch}>GET USER</button>
      {items}
      <LoginComponent></LoginComponent>
      <CardComponent />
      <MatchSummaryComponent/>
      <CardForm sports={arr}/>
    </div>
  );
}

HomePage.propTypes = {
  fetchMock: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  mock: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  mock: state.mock.mock
}); 

export default connect(mapStateToProps, { fetchMock, fetchUser })(HomePage);
