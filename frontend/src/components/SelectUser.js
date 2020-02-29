import React, { useState } from 'react';

const items = ["Gruszka", "Japko", "Sianko", "Morela", "Ananas", "papier", "beton", "maslo", "grzyb", "test"];

 const SelectUser = props => {
  const [userID, setUserID] = useState("");
  const [search, setSearch] = useState("");

  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    console.log("props: ", props);
    switch(name) {
      case "search":
        setSearch(value);
        if (value.length !== 0) {
          props.setMatches(() => {
            const reg = new RegExp(value);
            return props.users.filter(item => item.username.toLowerCase().match(reg, "gi"));
          })
        } else {
          props.setMatches([]);
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
          <input type="text" name="search" list="users" value={search} onChange={handleInputChange} />
          <datalist id="users">
            {props.users.map(user => (
              <option value={user.username}/>
            ))}
          </datalist>
        </label>
        {/* <ul>
          {matches.map(item => (
            <li key={item}>{item}<button onClick={addToGame}>+</button></li>
          ))}
        </ul> */}
      </form>
    </div>
  )
 }

 export default SelectUser;