import React, { Component } from 'react';

export default class Student extends Component{

    render(){
        const {Name,Age,Photo} = this.props;
        return(
         
            <ul className="Student-Ul">
           <li key="Name">{Name}</li>
           <li key="Age">{Age}</li>
           <li key="Photo"><img src={Photo} alt={Name} width="100" height="100"/></li>
           </ul>
        )
    }
}