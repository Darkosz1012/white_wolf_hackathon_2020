import React from 'react';
import '../styles/components/listElementComponent.scss';


const ListElementComponent = (props)=> {
  
    console.log(props)
      return (
        <div>
            <i> {props.iconD}</i>
            <span>{props.text}</span>
        </div>
      );
    }

  export default ListElementComponent;