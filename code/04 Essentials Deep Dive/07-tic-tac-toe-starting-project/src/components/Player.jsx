import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    //상태 변경 시 이전의 상태값에 기반하여 변경할 경우 위와 같이 상태변경함수를 사용해야한다.
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption='Edit';
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption='Save'
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? 'EDIT' : 'SAVE'} </button>
    </li>
  );
}
