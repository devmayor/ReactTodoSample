import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
    description: ""
  };
  constructor(props) {
    super(props);
  }

  submitForm = event => {
    console.log(this.state);

    event.preventDefault();
  };
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Add a new Todo Task</h1>
        <div className="row">
          <form onSubmit={this.submitForm}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                onChange={this.handleChange}
                name="title"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                onChange={this.handleChange}
                name="description"
                className="form-control"
              />
            </div>
            <button class="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTodo;
