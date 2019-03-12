import React, { Component } from 'react';
import Link from './Link'

export default class MenuElements extends Component{
    render(){
        let elements = this.props.data.map(el => (
            <Link link={el.link} text={el.text} />
          ));
        return(
          <ul> {elements}</ul>
        )
    }
}