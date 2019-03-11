import React, { Component } from 'react';
import StudentList from './StudentList'
import ListOfStudents from '../ListOfStudents'

export default class Body extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h6>Список студентов</h6>
               <StudentList props={ListOfStudents} />
              
           </div>
        )
    }
}