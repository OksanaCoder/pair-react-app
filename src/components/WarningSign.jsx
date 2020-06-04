import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class Warning extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        alert(this.props.text);
    }
    render(){
        return <Button variant="warning" onClick={this.handleClick}>Warning</Button>
    }
}

export default Warning;