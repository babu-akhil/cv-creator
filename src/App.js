import React, { Component } from "react";
import GeneralInfo from './GeneralInfo.js'
import WorkExperience from "./WorkExperience.js";
import Education from "./Education.js";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {mode: 'edit'}
    this.switchMode = this.switchMode.bind(this)
  }

  switchMode() {
    let buttons = Array.from(document.getElementsByClassName('nes-btn'));
    buttons.forEach(button => {
      button.remove()
      
    })
    window.print()
  }
  render(){
    return (
      <div id="everything">
        <h1> CV Creator</h1>
        <GeneralInfo />
        <WorkExperience />
        <Education />
        <button className = 'nes-btn is-primary' onClick = {this.switchMode}>Print</button>
      </div>
  );
  }
}

export default App;
