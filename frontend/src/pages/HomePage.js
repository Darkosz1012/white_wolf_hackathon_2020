import React, {useEffect} from 'react';
// import '../styles/pages/HomePage.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMock } from '../actions/mockAction';
import { fetchUsers } from '../actions/userActions';
import LoginComponent from '../components/LoginComponent';
import CardComponent from '../components/CardComponent';
import History from '../components/History';
import MatchSummaryComponent from '../components/MatchSummaryComponent';

const HomePage = props => {

  useEffect(() => {
    props.fetchMock();
  }, []);

  const items = props.mock ? props.mock.map(item => (
    <div key={item.login.uuid}>{item.name.first}</div>
  )) : [];

  const handleUserFetch = () => {
    props.fetchUsers();
  }

  var arr=[{
      user:{
        username:"Szymon"
      },
      result:5,
      opponentResult:2
    },
    {
      user:{
        username:"Darek"
      },
      result:3,
      opponentResult:6
    }
  ]

  return(
    <div className="home">
      Home Page
      <button onClick={handleUserFetch}>GET USER</button>
      {/* {items} */}
      {/* <LoginComponent></LoginComponent>
      <CardComponent />
      <MatchSummaryComponent/> */}
      <History match={arr}/>
    </div>
  );
}

HomePage.propTypes = {
  fetchMock: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  mock: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  mock: state.mock.mock
}); 

export default connect(mapStateToProps, { fetchMock, fetchUsers })(HomePage);
