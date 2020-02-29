import React from 'react';
import '../styles/components/statisticComponent.scss';


const StatisticComponent = (props)=> {
  
    console.log(props)
      return (
        <div>
            <i> {props.iconD}</i>
            <span>{props.text}</span>
        </div>
      );
    }

  export default StatisticComponent;