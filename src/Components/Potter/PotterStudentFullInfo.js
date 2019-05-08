import React, { Component } from "react";

export default class PotterStudentFullInfo extends Component {


state ={
  PotterData:{}
}


 async componentDidMount() {

    ////// POTTER API
    const url =
      "https://www.potterapi.com/v1/characters/"+this.props.match.params.idFromUrl+"?key=$2a$10$i88wqSpidj88VFUYbOlffuOK5tMGI.DU6Zs/h7PLNdKVzNIFTefSq"; //Использование URL?
    
    let p = await fetch(url).then(r => r.json());
    this.setState({ PotterData: p });
  }


  render() {

    const {name, house, role, school } = this.state.PotterData;
    //  

    return (
      <ul className={name}>
        <li key="name">name:{name}</li>
        <li key="house">house: {house}</li>
        <li key="school">school: {school}</li>
        <li key="role">role: {role}</li>
      </ul>
    );
  }
}
