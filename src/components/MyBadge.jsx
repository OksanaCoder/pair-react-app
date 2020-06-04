import React from "react";
import { Container, Badge } from "react-bootstrap";

class MyBadge extends React.Component {
    render (){
        return (
            <Container>
                <Badge variant="primary" className="m-2">
                    Random Badge Text 
                </Badge>

            </Container>
        )
    }

}

export default MyBadge;