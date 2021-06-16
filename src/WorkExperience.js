import { Component } from 'react'

class WorkExperience extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        input: {
          position: "",
          company: "",
          description: "",
          startDate: "",
          endDate: "",
          ongoing: "",
        },
        mode: "edit",
      };
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }
  
    handleChange(event) {
      if (event.target.name === "ongoing") {
        const prevInput = this.state.input;
        const updateThis = event.target.name;
        this.setState({
          input: { ...prevInput, [updateThis]: event.target.checked },
        });
      } else {
        const prevInput = this.state.input;
        const updateThis = event.target.name;
        this.setState({
          input: { ...prevInput, [updateThis]: event.target.value },
        });
      }
    }
  
    handleKeyPress(event) {
      if (event.key === "Enter") {
        this.handleChange(event);
        const form = event.target.form;
        const index = Array.prototype.indexOf.call(form, event.target);
        console.log(form);
        if (form.elements[index + 1]) {
          form.elements[index + 1].focus();
        } else {
          this.setState({ mode: "view" });
          console.log(this.state);
        }
      }
    }
  
    handleSave() {
      let inputs = {...this.state.input, id: [this.state.items.length]};
      if (this.state.input.position === "") {
        alert("Please fill empty fields!");
      } else if (this.state.input.company === "") {
        alert("Please fill empty fields!");
      } else if (this.state.input.description === "") {
        alert("Please fill empty fields!");
      } else if (this.state.input.startDate === "") {
        alert("Please fill empty fields!");
      } else {
        let newItems = [...this.state.items, inputs];
        this.setState({ items: newItems, mode: "view" });
      }
    }
  
    handleAdd() {
      this.setState({ mode: "edit", input: {
        position: "",
        company: "",
        description: "",
        startDate: "",
        endDate: "",
        ongoing: "",
      } });
    }
  
    handleEdit(id) {
      let newInput = {position: this.state.items[id].position, company: this.state.items[id].company,
                          description: this.state.items[id].description, startDate: this.state.items[id].startDate,
                        endDate: this.state.items[id].endDate, ongoing: this.state.items[id].endDate}
      this.setState({input: newInput}, () => {let items = this.state.items;
        let newItems = [...items.slice(0,id), ...items.slice(id+1)]
        this.setState({items: newItems, mode: 'edit'}, () => {console.log(this.state)})
      })
                   
    }
  
    render() {
      if (this.state.mode == "edit") {
        console.log('From inside render')
        console.log(this.state)
        return (
          <div id="WorkExperience" className="nes-container with-title">
            <h2 className="title">Work Experience</h2>
            {this.state.items.length === 0 ? (
              ""
            ) : (
              <WorkExperienceEntry items={this.state.items} handleEdit = {this.handleEdit} />
            )}
            <form>
              <div className="nes-field">
                <label htmlFor="role">role: </label>
                <input
                  type="text"
                  id="roleInput"
                  className="nes-input"
                  placeholder="unpaid intern? :("
                  name="position"
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyPress}
                  value= {this.state.input.position}
                  required
                ></input>
              </div>
              <div className="nes-field">
                <label htmlFor="company">company: </label>
                <input
                  type="text"
                  id="companyInput"
                  className="nes-input"
                  placeholder="Broke ass $tartup? :/"
                  name="company"
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyPress}
                  value={this.state.input.company}
                  required
                ></input>
              </div>
              <div className="nes-field">
                <label htmlFor="description">describe your role: </label>
                <textarea
                  id="descriptionInput"
                  rows="5"
                  className="nes-textarea"
                  name="description"
                  placeholder="trying to understand old codebases..."
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyPress}
                  value={this.state.input.description}
                  required
                ></textarea>
              </div>
              <div id="startDate">
                <label htmlFor="startDate">Joining date: </label>
                <input
                  type="month"
                  className="nes-input"
                  name="startDate"
                  id="startDateInput"
                  onChange={this.handleChange}
                  value = {this.state.input.startDate}
                  required
                ></input>
              </div>
              <div id="endDate">
                <label htmlFor="endDate">Leaving Date: </label>
                <input
                  type="month"
                  className="nes-input"
                  name="endDate"
                  id="endDateInput"
                  value={this.state.input.endDate}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="nes-field">
                <label>
                  <input
                    type="checkbox"
                    className="nes-checkbox"
                    id="currentWork"
                    onChange={this.handleChange}
                    value={this.state.input.ongoing?'on':''}
                    name="ongoing"
                  ></input>
                  <span>Currently employed</span>
                </label>
              </div>
            </form>
            <div className="buttons">
              <button
                id="savebtn"
                onClick={this.handleSave}
                className="nes-btn is-success"
              >
                SAVE
              </button>
            </div>
          </div>
        );
      } else if (this.state.mode == "view") {
        return (
          <div id="WorkExperience" className="nes-container with-title">
            <h2 className="title"> Work Experience </h2>
            <WorkExperienceEntry items={this.state.items} handleEdit = {this.handleEdit}/>
            <div className="buttons">
              <button
                id="addbtn"
                onClick={this.handleAdd}
                className="nes-btn is-primary"
              >
                Add Another
              </button>
            </div>
          </div>
        );
      }
    }
  }
  
  class WorkExperienceEntry extends Component {
    constructor(props) {
      super(props)
  
      this.onEdit = this.onEdit.bind(this)
    }
  
    onEdit(event) {
      this.props.handleEdit(event.target.id)
    }
  
    render() {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      console.log(this.props.items);
      return this.props.items.map((item) => {
        let endDate = item.endDate;
        let startDate = new Date(item.startDate);
        let startDateString =
          months[startDate.getMonth()] + ", " + startDate.getFullYear();
        let endDateString = "";
        if (item.endDate == "") {
          endDateString = "Present";
        } else {
          endDate = new Date(item.endDate);
          endDateString =
            months[endDate.getMonth()] + ", " + endDate.getFullYear();
        }
        return (
          <div className={"WorkExperienceEntry nes-container"} id={item.id}>
            <ul>
              <li>role: {item.position} </li>
              <li>company: {item.company}</li>
              <li>job description: {item.description}</li>
              <li>
                duration: {startDateString} to {endDateString}
              </li>
            </ul>
            <button id = {item.id} className = 'nes-btn is-primary' onClick = {this.onEdit}> Edit </button>
          </div>
        );
      });
    }
  }

export default WorkExperience