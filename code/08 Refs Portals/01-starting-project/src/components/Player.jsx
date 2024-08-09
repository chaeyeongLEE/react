import {useRef, useState} from "react";

export default function Player() {
    const playerName = useRef();

    const [enteredName, setEnteredName] = useState(null);

    function handleClick() {
        setEnteredName(playerName.current.value);
        playerName.current.value = "";
    }
  return (
    <section id="player">
      <h2>Welcome { enteredName ?? 'undefined'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>setName</button>
      </p>
    </section>
  );
}
