import React from "react";

function Welcome(props) {
  return (
    <div>
        <div class="welcomeScreen">
            <h1>Welcome to Hero's Game!</h1>
            <p>Laboris dolor reprehenderit eiusmod sunt nostrud laboris mollit ut sint et.</p>
            <button id="welcomeButton" onClick={() => props.handleClickWelcome()} > Cliqueu aqui per jogar!</button>
        </div>
    </div>
  );
}

export default Welcome;
