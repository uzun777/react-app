import React, { Component } from 'react';

export default class Button extends Component{
    render(){
        let {active,label, onClick} = this.props;
        return(
            <button onClick={onClick} style={{backgroundColor: active ? "green" : "red"}}>{label} </button>
        )
    }
}