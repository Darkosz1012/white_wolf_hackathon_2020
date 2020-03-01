import React from 'react';
import '../styles/components/disciplineComponent.scss';
import ListElementComponent from './ListElementComponent';


const DisciplineComponent = (props)=> {
  
  const menuList=[
    ["icon","Statisticc","statistic"],
    ["icon","History","history"],
    ["icon","Unranked Game","unrankedGame"],
    ["icon","Ranked Game","rankedGame"],
  ]
  const handleClick = (e, where)=>{
    console.log("aaa",where)
  }
    console.log(props)
      return (
        <div>
          <div>
              <i> {props.discipline.icon}</i>
              <span>{props.discipline.name}</span>
          </div>
          <div>
            {menuList.map(el=>{return(<ListElementComponent icon={el[0]} text={el[1]} onClick={(e)=>{handleClick(e, el)}} ></ListElementComponent>);})}
          </div>
        </div>

      );
    }

  export default DisciplineComponent;