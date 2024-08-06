import Header from "./components/Header.jsx";
import Calculator from "./components/Calculator.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react";


function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                // 기존 상태값을 복사붙여넣기(기존 속성 중에 하나만 업데이트 되도록)
                // ...prevUserInput 는 예전 userInput 상태 객체를 펼치는 것을 뜻함.
                //[inputIdentifier]: newValue는 그 객체의 하나의 단일한 프로퍼티를 덮어쓰기(duration이든 예상반환값이든 새로운 속성을 받아야지)
                ...prevUserInput,[inputIdentifier]: +newValue,
                // newValue앞에 +를 붙임으로써 강제로 숫자로 인식하게함
            }
        })
    }
  return (
      <>
        <Header message="React Investment Calculator" />
        <Calculator onChange={handleChange} userInput={userInput} />
          {!inputIsValid && <p className="center">duration의 값은 1이상이어야합니다.</p>}
        {inputIsValid && <Results input={userInput} />}
      </>
  )
}

export default App
