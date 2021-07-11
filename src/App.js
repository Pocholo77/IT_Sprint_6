import "./App.css";
import Escena from "./components/escena/Escena";
import React from "react";
import Welcome from "./components/Welcome";

const textsData = require("./Textos.json");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textos: textsData,
      activeText: 0,
      displayScreen: true
    };
    this.handleClickUp = this.handleClickUp.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);
    this.handleClickWelcome = this.handleClickWelcome.bind(this) 
  }  

  handleClickWelcome(){

    this.setState((prevState) =>{
      return { 
        displayScreen: !prevState.displayScreen 
      }
    })
  }
  /* ------------------------------------------------------------------------ Control bajar por el menu */
  updateTextDown(prevState) {

    let textoUpdated = this.state.textos;
    textoUpdated[prevState.activeText].class = "noActive";
    textoUpdated[prevState.activeText - 1].class = "active";
    
    return textoUpdated;
  }

  handleClickDown() {
    this.setState((prevState) => {
      
      if (prevState.textos[prevState.activeText].id <= 1) {
        return;
      }

      return {
        textos: this.updateTextDown(prevState),
        activeText: prevState.activeText - 1,
      };
    });
  }
 /* ------------------------------------------------------------------------ Control subir por el menu */
  updateTextUp(prevState) {
  
    let textoUpdated = this.state.textos;
    textoUpdated[prevState.activeText].class = "noActive";
    textoUpdated[prevState.activeText + 1].class = "active";

    return textoUpdated;
  }

  handleClickUp() {
 
    this.setState((prevState) => {
      if (prevState.textos[prevState.activeText].id >= 4) {
        return;
      }

      return {
        textos: this.updateTextUp(prevState),
        activeText: prevState.activeText + 1,
      };
    });
  }

  render() {
    const array = this.state.textos.map((text) => {
      return <Escena key={text.id} text={text.text} className={text.class} />;
    });
    
    return (
      this.state.displayScreen ? <Welcome handleClickWelcome={this.handleClickWelcome}/> : 
      <div className="App">
        <button onClick={this.handleClickDown}> Atras </button>
        <button onClick={this.handleClickUp}> Adelante </button>
        {array}
      </div>
    );
  }
}

export default App;
