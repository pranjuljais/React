import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playername, setPlayername] = useState(initialName);
  const [editing, saved] = useState(false);

  function handleEditClick() {
    saved((edit) => !edit);
    if (editing) {
      onChangeName(symbol, playername);
    }
  }
  function handleChange(e) {
    console.log(e.target.value);

    setPlayername(e.target.value);
  }

  //let btn = 'Edit';
  let playerName = <span className="player-name">{playername}</span>;
  if (editing) {
    playerName = (
      <input type="text" required value={playername} onChange={handleChange} />
    );
    // btn='Save';
  }

  return (
    <li className={isActive ? "active" : "undefined"}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
