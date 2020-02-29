import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/pages/userPage.scss';
import photo from '../images/profile.png';
import PersonalData from '../components/PersonalData';

const UserPage = (props) => {
  console.log(props);
  const info = props.user.username ? <PersonalData 
    username={props.user.username}
    firstName={props.user.firstname}
    lastName={props.user.lastname}
    email={props.user.email} 
    /> : null;
  return(
    <div className="userPage">
      <img src={photo} alt="" id="user_photo"/>
        <section id="personal_data">
          {info}
        </section>
    </div>
  );
}

UserPage.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.login.user
}); 

export default connect(mapStateToProps, {})(UserPage);