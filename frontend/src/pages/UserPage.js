import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/pages/userPage.scss';
import photo from '../images/profile.png';
import PersonalData from '../components/PersonalData';

const UserPage = (props) => {
  console.log(props);
  const info = props.user ? <PersonalData 
    firstName={props.user.name.first}
    lastName={props.user.name.last}
    since={props.user.registered.date} 
    /> : null;
  return(
    <div className="userPage">
      <img src={photo} alt="" id="user_photo"/>
        <section id="personal_data">
          {/* <div>first name:</div>
          <div>{props.user.name.first}</div>
          <div>last name:</div>
          <div>{props.user.name.last}</div>
          <div>since:</div>
          <div>{props.user.registered.date}</div> */}
          {info}
        </section>
    </div>
  );
}

UserPage.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user.data
}); 

export default connect(mapStateToProps, {})(UserPage);