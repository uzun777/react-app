import React, { Component } from 'react';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.Name = props.Name;
    }
    render(){
        return(
           "Меню"
        )
    }
}