import Header from "./components/Header.jsx";
import Calculator from "./components/Calculator.jsx";


function App() {
  return (
      <>
        <Header message="React Investment Calculator" />
        <div id="user-input">
              <Calculator labelName="initial Investment" />
              <Calculator labelName="Annual Investment" />
              <Calculator labelName="Expected Return" />
              <Calculator labelName="Duration" />
        </div>
      </>
  )
}

export default App
