import React, { Component } from "react";
import People from "./People";
import { loading, load, notLoaded } from "../../modules/peoples/actions";
import { loadData } from "../../modules/peoples/AsyncPeopleActions";
import { connect } from "react-redux";
import { FormErrors } from './FormErrors'

const mapState = state => state.peopleList;
const mapDispatch = dispatch => ({
  loading: () => dispatch(loading()),
  load: () => dispatch(load()),
  notLoaded: () => dispatch(notLoaded()),
  loadData: () => dispatch(loadData())
});

export class PeopleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      email: '',
      password: '',
      age: '',
      secondName: '',
      name: '',
      formErrors: { email: '', password: '', name:'', secondName:'',age:'' },
      emailValid: false,
      passwordValid: false,
      ageValid: false,
      secondNameValid: false,
      nameValid: false,
      formValid: false
    };



    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // state = {
  //   data: null
  // };


  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let ageValid = this.state.ageValid;
    let secondNameValid = this.state.secondNameValid;
    let nameValid = this.state.nameValid;
    let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
        case 'age':
        ageValid = value.match(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/);
        fieldValidationErrors.age = ageValid ? '' : ' is invalid';
        break;
        case 'name':
        nameValid = value.match(/^[a-z ,.'-]+$/i);
        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break;
        case 'secondName':
        secondNameValid = value.match(/^[a-z ,.'-]+$/i);
        fieldValidationErrors.secondName = secondNameValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }
  validateForm() {
    this.setState({
      formValid: this.state.emailValid &&
        this.state.passwordValid
    });
  }


  errorClass(error) {
    return (error.length === 0 ? '' : 'is-invalid');
  }


  async componentDidMount() {
    this.props.loadData();
    this.state.data = this.props.list;
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => { this.validateField(name, value) }) // ,
    console.log("asd", this.state, name, value)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("123sa", event, this.state.data);
    fetch('http://localhost:3004/profile', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: {
        id: 45,
        name: this.state.name,
        secondName: this.state.secondName,
        age: this.state.age
      }
    });
  };


  render() {
    return this.props.list === null ? (
      <p>Loading</p>
    ) : (
        <div className="peopleInfo">

          <form onSubmit={this.handleSubmit}>

            <h2>Регистрация</h2>
            <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
            </div>

            <div className="form-group">
              <label>
                Name:
            </label>
              <input type="text" name="name" className={`form-control ${this.errorClass(this.state.formErrors.name)}`} onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>
                Second Name:
            </label>
              <input type="text" name="secondName" className={`form-control ${this.errorClass(this.state.formErrors.secondName)}`} onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>
                Age:
            </label>
              <input type="text" name="age" className={`form-control ${this.errorClass(this.state.formErrors.age)}`} onChange={this.onChange} />
            </div>
            <div className={`form-group `}>
              <label>
                Email:
            </label>
              <input type="text" name="email" className={`form-control ${this.errorClass(this.state.formErrors.email)}`} value={this.state.email} onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>
                Password:
            </label>
              <input type="password" name="password" className={`form-control ${this.errorClass(this.state.formErrors.password)}`} onChange={this.onChange} />
            </div>
            <input type="submit" value="Submit" disabled={!this.state.formValid} />
          </form>



          {this.props.list.map(people => (                 //this.props.list.
            <People {...people} key={people.id} />
          ))}{" "}
        </div>
      );
  }
}

export default connect(
  mapState,
  mapDispatch
)(PeopleList);
