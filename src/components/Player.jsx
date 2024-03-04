import { useState , useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [player, setPlayer] = useState("");
  

  
  function handleSetName(){

    setPlayer(playerName.current.value) ;


  }


  return (
    <section id="player">
      <h2>Welcome {player?player:"Unknown Entity"} </h2>
      <p>
        <input ref={playerName}  type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
