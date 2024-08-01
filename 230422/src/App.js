import logo from './logo.svg';
import './App.css';


function App() {
      const handleInput = (e) => {
    
    
        console.log( e.target );
        console.log( e.currentTarget );
    
        console.log( '----------------------' );
        console.log( e.target.value );
        console.log( e.currentTarget.value )
      }
      return (
        <>
          <input type="text" onChange={handleInput}/>
          <br />
    
          <button onClick={handleInput}>
            <div>divdiv</div>
            <p>ppp</p>
            <div>
              ddddd
              <input value="value"></input>
            </div>
          </button>
        </>
      );
    }
    
  

export default App;
