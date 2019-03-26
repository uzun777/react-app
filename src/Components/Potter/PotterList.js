import React, { Component } from 'react';
import PotterStudent from "../Potter/PotterStudent"

export default class PotterStudentList extends Component {
    
   render(){
const {change} = this.props;
    let PotterStudentElements = this.props.data.map(student =>
        <PotterStudent {...student} key={student.name} change={change} />)
        
    return(
        <ul className="PotterStudentElements">
      {PotterStudentElements}
        </ul>
    )

   }
}