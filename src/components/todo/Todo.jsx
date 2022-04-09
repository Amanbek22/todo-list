import React from "react";
import css from "./Todo.module.css"


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      todoValue: props.text,
      intervalId: null,
    }
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault();
    this.props.onEdit(this.props.id, this.state.todoValue)
    this.setState({ isEdit: false });
  };

  handleChange(e) {
    this.setState({todoValue: e.target.value});
  } 

  render() {
    return (
      <div className={css.wrapper}>
        {
          this.state.isEdit
            ? <form onSubmit={this.submit} className="input-group">
              <input
                value={this.state.todoValue}
                onChange={(e) => this.handleChange(e)}
                type="text"
                className="form-control"
                placeholder="Enter your todo"
              />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            : <label className={css.todoCheck} >
              <input
                type="checkbox"
                checked={this.props.status}
                onChange={() => this.props.changeStatus(this.props.id)}
              />
              <p className={this.props.status ? css.done : ""}>{this.props.text}</p>
            </label>
        }



        <div className={css.buttons}>
          <button
            onClick={() => this.setState({ isEdit: !this.state.isEdit })}
            type="button"
            className="btn btn-success"
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            Del
          </button>
        </div>
      </div>
    )
  }
}


export default Todo;