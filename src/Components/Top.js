import React, { Component } from 'react';
import Link from './Link'
import Menu from './Menu'
import '../styles/top-bar.css'

export default class Top extends Component{
    constructor(props){
        super(props);
        this.Name = props.Name;
    }
    render(){
        return(
            <div>
            <ul className="Top-ul">
           <li key="Company-Name">{this.Name}</li>
           <li key="0"><Link text="Link1" link="https://mail.ru" /></li>
           <li key="1"><Link text="Link2" link="https://google.ru" /></li>
           <li key="2"><Link text="Link3" link="https://yandex.ru" /></li>
           <li key="Menu"><Menu/></li>
           </ul>
           </div>
        
        )
    }
}