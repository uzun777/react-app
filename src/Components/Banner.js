import React, { Component } from 'react';

export default class Banner extends Component{
    render(){
           const {url,alt,text,width,height} = this.props;
        return(
          <div className="Banner">
             <img src={url} alt={alt} width={width} height={height}/>
              <p>{text}</p>
          </div>
        )
    }
}