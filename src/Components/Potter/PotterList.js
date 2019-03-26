import React, { Component } from 'react';
import PotterStudent from "../Potter/PotterStudent"

export default class PotterStudentList extends Component {
   render(){

    let PotterStudentElements = this.props.data.map(student =>
        <PotterStudent name={student.name} key={student.name} house={student.house} school={student.school} role={student.role}/>)
        
    return(
        <ul className="PotterStudentElements">
      {PotterStudentElements}
        </ul>
    )

   }
}