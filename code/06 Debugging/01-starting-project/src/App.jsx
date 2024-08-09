import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const[title, setTitle] = useState(['남자코트추천', '강남맛집']);

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }


  function isClickChange(){
    var newArray = [...title];
    newArray[0] = '여자코트추천';
    setTitle(newArray);
  }
  return (
      <>
        <Header/>
        <UserInput userInput={userInput} onChange={handleChange}/>
        <Results input={userInput}/>
        {/*<button onClick={()=> {setTitle('여자코트추천')}}>{title}</button>*/}
        <button onClick={isClickChange}>{title[0]}</button>

      </>
  );
}

export default App;
