import React, { Component } from "react";
import People from "./People";

export default class PeopleList extends Component {
  state = {
    data: null
  };

  async componentDidMount() {
    const url = "http://localhost:3004/profile";

    let p = await fetch(url).then(r => r.json());
    this.setState({ data: p });
    
  }

  render() {
    return this.state.data === null ?  <p>Loading</p> :  
    <div className='peopleInfo'>{ this.state.data.map(people => (
        <People {...people} key={people.id}/>
      )) } </div>
  }
}
