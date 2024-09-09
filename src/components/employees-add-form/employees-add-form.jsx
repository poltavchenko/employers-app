import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            name="name"
            value={name}
            placeholder="What's their name?"
          />
          <input
            type="number"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            name="salary"
            value={salary}
            placeholder="Salary in $?"
          />

          <button
            type="submit"
            className="btn btn-outline-light"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
