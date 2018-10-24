import React, {Component} from 'react';
import Item from './Item';

export default class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            listItems:['Red', 'RebeccaPurple', 'Gold']
        }
    }
    
    render(){
        return (
            <ul>
            { this.state.listItems.map( (item) => (
                    <Item key={item} label={item}
                        changeColour={this.props.changeColour} 
                        colour={this.props.colour}
                    />
                ))
            }
            </ul>
        )
    }
}