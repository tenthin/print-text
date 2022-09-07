import React, { useState } from 'react';

const App = () => {
  
  const [inputValue,setInputValue] = useState("");

  let onChange = (event) => {
    const newValue = event.target.value;
      setInputValue(newValue);
  }

  return (
    <div>
      <input placeholder="write something..." onChange={onChange}/>
        {inputValue}
    </div>
  );
}

export default App;
