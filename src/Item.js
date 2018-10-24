import React, {Component} from 'react';


export default class Item extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    
    handleClick = (ev) => {
        ev.preventDefault();
        let c = this.props.label.toLowerCase();
        this.props.changeColour(c);
    }
    
    render(){
        return (
            <li>
                <p>Current colour is { this.props.colour }</p>
                <button onClick={this.handleClick}>Change to {this.props.label}</button>
            </li>
        )
    }
}