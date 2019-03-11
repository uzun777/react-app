import React,{Component} from 'react';

class Main extends Component{
    state = {
isOpen:true
    }

    render(){
        const {article} = this.props
        const body =   this.state.isOpen && <section>{article.text}</section>;
        return(
        <div>
            <h2>
            {article.title}
            <button onClick={this.handleClick}> {this.state.isOpen ? "close" : "open"} </button>
            </h2>
           {body}
         
            <h5>{new Date(article.date).toTimeString()}</h5>
        </div>
    )
        }

        handleClick= ()=>{
            this.setState({
                isOpen:!this.state.isOpen
            })
        }
}


export default Main;