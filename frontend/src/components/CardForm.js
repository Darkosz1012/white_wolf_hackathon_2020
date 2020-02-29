import React from 'react';
import '../styles/components/cardForm.scss';

const CardForm = (props) => {
    console.log("CardForm", props)
    var option = props.sports.map((val)=>{
        return <option value={val.name}>{val.name}</option>
    })
      return (
        <div>
            <form class="cardForm">
                <label for="dyscpline">Dyscyplina</label>
                <select id="dyscpline">
                    {option}
                </select>
                <label for="skill">Umiejętości</label>
                <input type="range" min="0" max="10" step="1"/>
                <input type="submit" value="Dodaj"/>
            </form>
        </div>
      );
    
  }
  export default CardForm;