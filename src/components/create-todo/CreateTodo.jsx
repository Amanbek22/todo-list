import React from "react";


class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  submit(e) {
    e.preventDefault();
    this.props.createTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  render() {
    return (
      <form onSubmit={this.submit} className="input-group">
        <input
          value={this.state.inputValue}
          onChange={this.handleChange}
          type="text"
          className="form-control"
          placeholder="Enter your todo"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

// function CreateTodo() {

//   function submit(e) {
//     e.preventDefault();
//     console.log(e);
//     console.log();
//   }

//   return (
//     <form onSubmit={submit} className="input-group">
//       <input type="text" className="form-control" placeholder="Enter your todo" />
//       <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
//   )
// }


export default CreateTodo;