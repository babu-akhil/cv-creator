import React, {Component} from "react";
import { FontAwesomeIcon } from '../node_modules/@fortawesome/react-fontawesome'
import { faAngleRight } from '../node_modules/@fortawesome/free-solid-svg-icons'


class GeneralInfo extends Component {

  render() {
    return (
      <div id = 'GeneralInfo'>
        <h2>General Information</h2>
        <ul>
          <li><FontAwesomeIcon icon={faAngleRight} id='name' className = 'visible'/> name: </li>
          <li><FontAwesomeIcon icon={faAngleRight} id='email' className = 'hidden'/> email: </li>
          <li><FontAwesomeIcon icon={faAngleRight} id='phone' className = 'hidden'/> phone no: </li>
          </ul> 
      </div>
    )
  }

}

class WorkExperience extends Component {
  render() {
    return 
  }
}







function App() {
  return (
    <div id = 'title'>
      <h1> CV Creator</h1>
      <GeneralInfo />
    </div>
  )
}

export default App;
