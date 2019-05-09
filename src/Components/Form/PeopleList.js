import React, { Component } from "react";
import People from "./People";
import { loading, load, notLoaded } from "../../modules/peoples/actions";
import {loadData} from "../../modules/peoples/AsyncPeopleActions";
import { connect } from "react-redux";

const mapState = state => state.peopleList;
const mapDispatch = dispatch => ({
  loading: () => dispatch(loading()),
  load: () => dispatch(load()),
  notLoaded: () => dispatch(notLoaded()),
  loadData: () => dispatch(loadData())
});

export class PeopleList extends Component {
  state = {
    data: null
  };

  async componentDidMount() {
    this.props.loadData();
  }

onChange = (name)=>(event)=>{
  this.setState({[name] :event.target.value},console.log("asd",this.state))
  
}

  handleSubmit(event){ 
    event.preventDefault();
    console.log("123sa",event);
    fetch('http://localhost:3004/', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: {
      "name": this.name.value,
      "secondName": this.secondName.value,
      "secondName": this.age.value
     }
    });
   };


  render() {
    return this.props.list === null ? (
      <p>Loading</p>
    ) : (
      <div className="peopleInfo">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input type="text" name="name" onChange={this.onChange("Name")} />
          </label>
          <label>
            Second Name: <input type="text" name="secondName" />
          </label>
          <label>
            Age: <input type="text" name="age" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.props.list.map(people => (
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
