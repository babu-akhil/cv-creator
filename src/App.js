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
    this.state = {items: [], input: {position: '', company :'', description: '', startDate: '', endDate: '', ongoing: ''}, mode: 'edit'}
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleChange(event) {
    if(event.target.name ==='ongoing') {
      const prevInput = this.state.input
      const updateThis = event.target.name
      this.setState({input: {...prevInput, [updateThis]: event.target.checked}})
    }
    else {
      const prevInput = this.state.input
      const updateThis = event.target.name
      this.setState({input: {...prevInput, [updateThis]: event.target.value}})
    }
  } 
  
  handleKeyPress(event) {
    if(event.key==='Enter') {
      this.handleChange(event)
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      console.log(form)
      if(form.elements[index+1])
        {
        form.elements[index + 1].focus();
      }
      else {this.setState({mode: 'view'});
            console.log(this.state)}
    }
  }

  handleSave() {
    let inputs = this.state.input
    let newItems = [...this.state.items, inputs]
    this.setState({items: newItems, mode:'view'})
  }

  render() {

    if (this.state.mode =='edit') {
      return (
        <div id = 'WorkExperience' className = 'nes-container with-title'>
          <h2 className = 'title'>Work Experience</h2>
          <form>
          <div className = "nes-field">
            <label htmlFor ="role">role: </label>
            <input type = "text" id = "roleInput" className = "nes-input" placeholder="unpaid intern? :(" name='position' onChange = {this.handleChange} onKeyDown = {this.handleKeyPress}></input>
          </div>
          <div className = "nes-field">
            <label htmlFor = 'company'>company: </label>
            <input type = "text" id = "companyInput" className = "nes-input" placeholder="Broke ass $tartup? :/" name='company' onChange = {this.handleChange} onKeyDown = {this.handleKeyPress}></input>
          </div>
          <div className = "nes-field">
            <label htmlFor = 'description'>describe your role: </label>
            <textarea id = "descriptionInput" rows = '5' className = "nes-textarea" name = 'description' placeholder="trying to understand old codebases..." onChange = {this.handleChange} onKeyDown = {this.handleKeyPress}></textarea>
          </div>
            <div id = 'startDate'>
              <label htmlFor = 'startDate'>Joining date: </label>
              <input type = 'month' className = 'nes-input' name = 'startDate' id = 'startDateInput' onChange = {this.handleChange}></input>
            </div>
            <div id = 'endDate'>
              <label htmlFor = 'endDate'>Leaving Date: </label>
              <input type = 'month' className = 'nes-input' name = 'endDate' id = 'endDateInput' onChange = {this.handleChange}></input>
            </div>
            <div className = 'nes-field'>
              <label>
                <input type = "checkbox" className = "nes-checkbox" id = 'currentWork' onChange = {this.handleChange} name = 'ongoing'></input>
                <span>Currently employed</span>
              </label>
            </div>
            </form>
            <div className = 'buttons'>    
              <button id = 'savebtn' onClick = {this.handleSave} className = 'nes-btn is-success'>SAVE</button>
              <button id = 'addbtn' onClick = {this.handleAdd} className = 'nes-btn is-primary'>Add Another</button>          
            </div>
          
        </div>
      )
      }
      else if(this.state.mode == 'view') {
          const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                          'October', 'November', 'December']
          return (this.state.items.map(item => { 
            let endDate = item.endDate
            let startDate = new Date(item.startDate)
            let startDateString = months[startDate.getMonth()]+', '+ startDate.getFullYear()
            let endDateString = ''
            if (item.endDate==''){endDateString = 'Present'}
            else {endDate = new Date(item.endDate)
                  endDateString = months[endDate.getMonth()]+', '+ endDate.getFullYear()
                  }
            return(
            <div id = 'WorkExperience' className = 'nes-container with-title'>
              <h2 className = 'title'>Work Experience</h2>
              <ul>
                <li>role: {item.position}</li>
                <li>company: {item.company}</li>
                <li>job description: {item.description}</li>
                <li>duration: {startDateString} to {endDateString}</li>
              </ul>
              <div className = 'buttons'>
                  
                <button id = 'addbtn' onClick = {this.handleAdd} className = 'nes-btn is-primary'>Add Another</button>
              </div>
            </div>
          )
        }))
      }
    }
}







function App() {
  return (
    <div id = 'everything'>
      <h1> CV Creator</h1>
      <GeneralInfo />
      <WorkExperience />
    </div>
  )
}

export default App;
