import React from 'react';
import StatisticComponent from './StatisticComponent';
import '../styles/components/cardComponents.scss';

const icon = "sdsdsdd";
export default class CardComponents extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };

    }  
    
    
  
    render() {
      return (
        <div>
            <StatisticComponent iconD={icon} text={"textttt"}/>
        </div>
      );
    }
  }