import React, { useEffect, useState } from 'react';
import SelectUser from '../components/SelectUser';
import { fetchUsers, addUser } from '../actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DisciplineComponent from '../components/DisciplineComponent';
// import '../styles/pages/ContactPage.scss';

const ListPage = props => {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    props.fetchUsers();
  }, []);

  const handleAdd = (e, name) => {
    console.log(e, name);
    props.addUser(name);
  }

  console.log("mat: ", matches);

  const matched = matches.map(match => (
    <div key={match.username}>
      <span>{match.username}</span>
      <button onClick={(e) => handleAdd(e, match.username)}>select</button>
    </div>
  ));

  const selected = props.room.map((player, i) => (
    <div key={i}>
      {player}
    </div>
  ))

  return(
    <div className="contact">
      Contact Page
      <br/>
      <br/>
      <SelectUser setMatches={setMatches} users={props.users}/>
      {matched}
      <h3>PLAYERS:</h3>
      {selected}
      <DisciplineComponent discipline={{}}></DisciplineComponent>
    </div>
  );
}

ListPage.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  room: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  users: state.users.data,
  room: state.users.room
}); 

export default connect(mapStateToProps, { fetchUsers, addUser })(ListPage);
