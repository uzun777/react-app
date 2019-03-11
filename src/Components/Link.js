import React, { Component } from 'react';

export default class Link extends Component{
   constructor(props){
       super(props);
       this.link = props.link;
       this.text = props.text;
   }

    render(){
        return(
             <a href={this.link}>{this.text}</a>
           
        )
    }
}