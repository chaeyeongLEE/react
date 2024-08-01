import React, { Component } from 'react'
import { useState } from 'react'

/*export default class StateEx3 extends Component {
    
   
    render(){
       let [nums, setNums] = useState(0);
        };
        return(
            {count}
            <div className="Ex3">
            <button onClick={() => setNums(nums +2) }> +2 </button>
            <button onClick={() => setNums(nums -1) }>-1</button>
            <span> {nums}</span>
            </div>
        );
        }*/
        export default function StateEx3() {
            const [count, setCount] = useState(0);
          
            return (
              <div>
                {count}
                <br />
                <button onClick={() => setCount(count + 2)}> +2 </button>
                <button onClick={() => setCount(count - 1)}> -1 </button>
              </div>
            );
          }        