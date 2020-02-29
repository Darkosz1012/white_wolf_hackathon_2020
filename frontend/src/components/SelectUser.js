import React, { useState } from 'react';

const items = ["Gruszka", "Japko", "Sianko", "Morela", "Ananas", "papier", "beton", "maslo", "grzyb", "test"];

 const SelectUser = props => {
  const [userID, setUserID] = useState("");
  const [search, setSearch] = useState("");
  const [matches, setMatches] = useState([]);

  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    switch(name) {
      case "search":
        setSearch(value);
        if (value.length !== 0) {
          setMatches(() => {
            const reg = new RegExp(value);
            return items.filter(item => item.toLowerCase().match(reg, "gi"));
          })
        } else {
          setMatches([]);
        }
        break;
      case "user_id":
        setUserID(value);
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userID, search);
  }

  const addToGame = (e) => {
    console.log(e.target.parentNode);
  }

  return(
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label>user id: 
          <input type="text" name="user_id" value={userID} onChange={handleInputChange}/>
        </label>
        <button>++</button>
      </form>
      <br/>
      <br/> */}
      <form onSubmit={handleSubmit}>
        <label>search: 
          <input type="text" name="search" value={search} onChange={handleInputChange}/>
        </label>
        <ul>
          {matches.map(item => (
            <li key={item}>{item}<button onClick={addToGame}>+</button></li>
          ))}
        </ul>
      </form>
    </div>
  )
 }

 export default SelectUser;