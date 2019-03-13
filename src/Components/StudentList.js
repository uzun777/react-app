import React, { Component } from 'react';
import Student from "./Student"

export default function StudentList(props) {
    let StudentElements = props.data.map(student =>
        <Student Name={student.Name} Age={student.Age} Photo={student.Photo}/>)

       
    return(
        StudentElements
    )
}