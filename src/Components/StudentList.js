import React, { Component } from 'react';
import Student from "./Student"

export default class StudentList extends Component {
   render(){

    let StudentElements = this.props.data.map(student =>
        <Student Name={student.Name} Age={student.Age} Photo={student.Photo}/>)
       
    return(
        StudentElements
    )

   }
}