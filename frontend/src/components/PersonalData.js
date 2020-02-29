import React from 'react';
import '../styles/components/personalData.scss';

const PersonalData = props => {

  return(
    <div className="personal_data">
      <div>first name:</div>
      <div>{props.firstname}</div>
      <div>last name:</div>
      <div>{props.lastname}</div>
      <div>email:</div>
      <div>{props.email}</div>
      <div>username:</div>
      <div>{props.username}</div>
    </div>
  );
}

export default PersonalData;