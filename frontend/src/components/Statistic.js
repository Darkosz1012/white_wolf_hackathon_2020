import React from 'react';
import '../styles/components/statistic.scss';


const Statistic = (props)=> {
    var random = Math.floor(Math.random()*props.data.match.length);
    console.log(props)
      return (
        <div>
            <div class="stats">Ranking point: {props.data.ranking}</div>
            <div class="stats">League: {props.data.league ? props.data.ranking : "unkown"}</div>
            <div class="stats">Wins: {random}</div>
            <div class="stats">Loses: {props.data.match.length-random}</div>
        </div>
      );
    }

  export default Statistic;