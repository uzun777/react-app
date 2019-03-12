import React, { Component } from 'react';
import MenuElements from './MenuElements'

export default class Menu extends Component{

    render(){

        return(
           <MenuElements data={
               [
                   {
                       link:"google.com",
                       text:"first item"
                   },
                   {
                    link:"yahoo.com",
                    text:"second item"
                }
               ]
           } />
        )
    }
}