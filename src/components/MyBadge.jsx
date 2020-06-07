import React from "react";
import { Container, Badge } from "react-bootstrap";
import Book from './SingleBook';

class MyBadge extends React.Component {
    render (){
        return (
        
                <Badge variant="primary ml-2">
                  0  <span>{this.props.count}</span>
                </Badge>

            
        )
    }

}

export default MyBadge;