import React from 'react';
import '../styles/components/personalData.scss';

const PersonalData = props => {

  return(
    <div className="personal_data">
      <div>first name:</div>
      <div>{props.firstName}</div>
      <div>last name:</div>
      <div>{props.lastName}</div>
      <div>since:</div>
      <div>{props.since}</div>
    </div>
  );
}

export default PersonalData;