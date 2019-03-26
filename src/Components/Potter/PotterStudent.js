import React, { Component } from "react";
import PotterStudentFullInfo from "./PotterStudentFullInfo";

export default class PotterStudent extends Component {

  render() {
    const { name,house,data,change,id } = this.props;
    return (
      <ul className={name} onClick={()=>{
       change(name);
        {/*return <PotterStudentFullInfo data={data} name={name}/>*/}
        }}>

        <li key="name">name: {name}</li>
        <li key="house">house: {house}</li>
      </ul>
    );
  }
}
