import React, {useState} from 'react';
import '../styles/components/matchSummaryComponent.scss';


const MatchSummaryComponent = (props) => {

  const [inputs, setInputs] = useState({
    participantsQuantity: 0,
    team1Quantity: 0,
    team2Quantity: 0,
    date: new Date().toISOString().substr(0, 10)
  });
  const [formType] = useState(props.type||"race");

  const units =["minutes","score"]

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      console.log(inputs);
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const generateUserFields =(quantity,team)=>{
    let fields=[];
    for(let i = 0 ; i < quantity;i++)
    {
      fields.push(<div>user</div>)
      let fieldName = "user"+i+"Score";
      if(team===0)
      fields.push(<input name={fieldName}  type="number" />);
    } 
    return fields;
  }

  const increment = (name,amount)=>{
    console.log(name,amount,inputs[name])
    if(inputs[name] +amount >=0 )
      setInputs(inputs => ({...inputs, [name]:inputs[name] + amount}));
  }
      return (
        <form onSubmit={handleSubmit}>
          <label >Date:
          <input name="date" type="date" value= {inputs.date}  onChange={handleInputChange}/> 
          </label>

        
          { formType === "teams" ? (<><div>
            <h4>Team 1</h4>
            <label>Quantity
            <input name="team1Quantity" type="number" min="0" max="20" value={inputs.team1Quantity} onChange={handleInputChange}></input>
            </label>
            {generateUserFields(inputs.team1Quantity,1)}
            <input type="button" value="+" onClick={()=>{increment("team1Quantity",1)}}/>
            <input type="button" value="-" onClick={()=>{increment("team1Quantity",-1)}}/>
          </div>

          <div>
            <h4>Team 2</h4>
            <label>Quantity
            <input name="team2Quantity" type="number" min="0" max="20" value={inputs.team2Quantity} onChange={handleInputChange}></input>
            </label>
            {generateUserFields(inputs.team2Quantity,2)}
            <input type="button" value="+" onClick={()=>{increment("team2Quantity",1)}}/>
            <input type="button" value="-" onClick={()=>{increment("team2Quantity",-1)}}/>
          </div>

          <div>
            <h4>Score</h4>
            <input name="team1Score" type="number" min="0" max="300" onChange={handleInputChange}></input>:
            <input name="team2Score" type="number" min="0" max="300" onChange={handleInputChange}></input>
          </div></>) : null}

          { formType === "race" ? (<><div>
            <h4>Participants</h4>
            <label>Quantity
            <input name="participantsQuantity" type="number" min="0" max="20" value={inputs.participantsQuantity}  onChange={handleInputChange}></input>
            </label>
            {generateUserFields(inputs.participantsQuantity,0)}
            <input type="button" value="+" onClick={()=>{increment("participantsQuantity",1)}}/>
            <input type="button" value="-" onClick={()=>{increment("participantsQuantity",-1)}}/>
          </div>

          </>) : null}


          <input type="submit" value="Save Macht"></input>
        </form>
      );
    
  }
  export default MatchSummaryComponent;