import {Component} from 'react'

class GeneralInfo extends Component {
    constructor(props) {
      super(props);
      this.state = { mode: "edit", name: "", email: "", phone: "", location: "" };
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }
  
    componentDidMount() {
      this.Input.focus();
    }
  
    handleKeyDown(event) {
      if (event.key == "Enter") {
        const form = event.target.form;
        const index = Array.prototype.indexOf.call(form, event.target);
  
        if (form.elements[index + 1]) {
          form.elements[index + 1].focus();
        } else {
          this.setState({ mode: "view" });
          console.log(this.state);
        }
      }
    }
  
    handleChange(event) {
      if (event.target.id == "nameInput") {
        this.setState({ name: event.target.value });
      }
  
      if (event.target.id == "emailInput") {
        this.setState({ email: event.target.value });
      }
  
      if (event.target.id == "phoneInput") {
        this.setState({ phone: event.target.value });
      }
  
      if (event.target.id == "locationInput") {
        this.setState({ location: event.target.value });
      }
    }
  
    handleSave(event) {
      this.setState({ mode: "view" });
    }
  
    handleEdit(event) {
      this.setState({ mode: "edit" });
    }
    render() {
      if (this.state.mode == "view") {
        return (
          <div
            id="GeneralInfo"
            className="view"
            className="nes-container with-title"
          >
            <h2 className="title">General Information</h2>
            <form>
              <ul>
                <li>name: {this.state.name}</li>
                <li>email: {this.state.email}</li>
                <li>phone no: {this.state.phone}</li>
                <li>location: {this.state.location}</li>
              </ul>
            </form>
            <button
              id="editbtn"
              onClick={this.handleEdit}
              className="nes-btn is-primary"
            >
              Edit
            </button>
          </div>
        );
      } else if (this.state.mode == "edit") {
        return (
          <div
            id="GeneralInfo"
            className="edit"
            className="nes-container with-title"
          >
            <h2 className="title">General Information</h2>
            <form>
              <ul>
                <li>
                  name:
                  <input
                    type="text"
                    id="nameInput"
                    ref={(input) => {
                      this.Input = input;
                    }}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    className="nes-input"
                    value={this.state.name}
                  ></input>
                </li>
                <li>
                  email:
                  <input
                    type="email"
                    id="emailInput"
                    ref={(input) => {
                      this.Input = input;
                    }}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    className="nes-input"
                    value={this.state.email}
                  ></input>
                </li>
                <li>
                  phone no:
                  <input
                    type="text"
                    id="phoneInput"
                    ref={(input) => {
                      this.Input = input;
                    }}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    className="nes-input"
                    value={this.state.phone}
                  ></input>
                </li>
                <li>
                  location:
                  <input
                    type="text"
                    id="locationInput"
                    ref={(input) => {
                      this.Input = input;
                    }}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    className="nes-input"
                    value={this.state.location}
                  ></input>
                </li>
              </ul>
            </form>
            <button
              id="savebtn"
              onClick={this.handleSave}
              className="nes-btn is-success"
            >
              SAVE
            </button>
          </div>
        );
      }
    }
  }

export default GeneralInfo