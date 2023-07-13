
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState('');

    return (
      <div>
          <label>Enter your name:</label>
          <input type="text" onInput={(e) => {
            setName(e.currentTarget.value);
          }}/>

          <p>{`Hello ${name}`}</p>
      </div>
    )
}

export default App
