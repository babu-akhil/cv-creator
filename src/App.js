import React, {Component} from "react";



class GeneralInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {mode: 'edit', name: '', email: '', phone: '', location: ''}
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount() {
    this.Input.focus();
  }

  handleKeyDown(event) {
    console.log(event.key)
    if(event.key == 'Enter')
    {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);

      if(form.elements[index+1])
        {
        form.elements[index + 1].focus();
        }
      else {this.setState({mode: 'view'});
            console.log(this.state)}
    }
  }

  handleChange(event) {
    if(event.target.id =='nameInput') { this.setState({name: event.target.value})}

    if(event.target.id =='emailInput') { this.setState({email: event.target.value})}

    if(event.target.id =='phoneInput') { this.setState({phone: event.target.value})}

    if(event.target.id =='locationInput') { this.setState({location: event.target.value})}
  }


  handleSave(event) {
    this.setState({mode: 'view'})
  }

  render() {
    if (this.state.mode == 'view') {
      return (
        <div id = 'GeneralInfo' className = 'view' className = 'nes-container with-title'>
          <h2 className = 'title'>General Information</h2>
          <form>
          <ul>
            <li>name: {this.state.name}</li>
            <li>email: {this.state.email}</li>
            <li>phone no: {this.state.phone}</li>
            <li>location: {this.state.location}</li>
            </ul> 
          </form>
        </div>
      )
    }

    else if(this.state.mode == 'edit') {
      return (
        <div id = 'GeneralInfo' className = 'edit' className = 'nes-container with-title'>
          <h2 className = 'title'>General Information</h2>
          <form>
          <ul>
            <li>name: 
              <input type = 'text' id = 'nameInput' ref ={(input) => {this.Input = input;}} onKeyDown = {this.handleKeyDown} onChange = {this.handleChange} className = 'nes-input'></input>
            </li>
            <li>email: 
            <input type = 'email' id = 'emailInput' ref ={(input) => {this.Input = input;}} onKeyDown = {this.handleKeyDown} onChange = {this.handleChange} className = 'nes-input'></input>
            </li>
            <li>phone no: 
            <input type = 'text' id = 'phoneInput' ref ={(input) => {this.Input = input;}} onKeyDown = {this.handleKeyDown} onChange = {this.handleChange} className = 'nes-input'></input>
            </li>
            <li>location: 
            <input type = 'text' id = 'locationInput' ref ={(input) => {this.Input = input;}} onKeyDown = {this.handleKeyDown} onChange = {this.handleChange} className = 'nes-input'></input>
            </li>
          </ul> 
          </form>
          <button id = 'savebtn' onClick = {this.handleSave} className = 'nes-btn is-success'>SAVE</button>
        </div>
      )
    }
  }
}

class WorkExperience extends Component {
  constructor(props) {
    super(props)
    this.state = {items: [], input: {position: '', company :'', description: '', duration: ''}, mode: 'edit'}
  }




  render() {

    if (this.state.mode =='edit') {
      return (
        <div id = 'WorkExperience' className = 'nes-container with-title'>
          <h2 className = 'title'>Work Experience</h2>
          <div className = "nes-field">
            <label htmlFor ="role">role: </label>
            <input type = "text" id = "roleInput" className = "nes-input" placeholder="unpaid intern? :(" name='role'></input>
          </div>
          <div className = "nes-field">
            <label htmlFor = 'company'>company: </label>
            <input type = "text" id = "companyInput" className = "nes-input" placeholder="Broke ass $tartup? :/" name='company'></input>
          </div>
          <div className = "nes-field">
            <label htmlFor = 'description'>describe your role: </label>
            <textarea id = "descriptionInput" rows = '5' className = "nes-textarea" name = 'description' placeholder="trying to understand old codebases..."></textarea>
          </div>
            <div id = 'startDate'>
              <label htmlFor = 'startDate'>Joining date: </label>
              <input type = 'month' className = 'nes-input' name = 'startDate' id = 'startDateInput'></input>
            </div>
            <div id = 'endDate'>
              <label htmlFor = 'endDate'>Leaving Date: </label>
              <input type = 'month' className = 'nes-input' name = 'endDate' id = 'endDateInput'></input>
            </div>
            <div className = 'nes-field'>
              <label>
                <input type = "checkbox" className = "nes-checkbox" id = 'currentWork'></input>
                <span>Currently employed</span>
              </label>
            </div>
            <div className = 'buttons'>
              <button id = 'savebtn' onClick = {this.handleSave} className = 'nes-btn is-success'>SAVE</button>
              <button id = 'addbtn' onClick = {this.handleAdd} className = 'nes-btn is-primary'>Add Another</button>
            </div>
        </div>
      )
    }
  }
}






function App() {
  return (
    <div id = 'title'>
      <h1> CV Creator</h1>
      <GeneralInfo />
      <WorkExperience />
    </div>
  )
}

export default App;
