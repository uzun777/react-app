import React, { Component } from 'react';
import '../styles/top-bar.css'

export default class Student extends Component{
    constructor(props){
        super(props);
        this.Name = props.Name;
        this.Age = props.Age;
        this.Photo = props.Photo;
    }
    render(){
        return(
            <ul className="Student-Ul">
           <li key="Name">{this.Name}</li>
           <li key="Age">{this.Age}</li>
           <li key="Photo"><img src={this.Photo} alt={this.Name} width="100" height="100"/></li>
           </ul>
        )
    }
}