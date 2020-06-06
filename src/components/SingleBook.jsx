import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import { FaCar, FaCartPlus } from 'react-icons/fa';
// import Comment from 'Comment';

class Book extends Component {
   constructor(props) {
       super(props);
       
       this.state = {
           books: this.props.books
         
       }



   }

    render() {
        
        return (
            
        <div className='container'>
            <div className='row'>
            
                {this.state.books.map(book => {
                    return (
                   
                        <div className="col-sm-6 col-md-3 col-lg-2 ">
                        <Card className='card-item'>
                            <Card.Img src={book.img} className='img-card'/>
                        
                        <Card.Body className='body-card'>
                            <Card.Title className='title-size'>{book.title}</Card.Title>
                            <div className='btn-group'>
                                <button type="button" class="btn btn-primary btn-sm comment">Add comment</button>
                                <button type="button" class="btn btn-secondary btn-sm"><FaCartPlus /></button>
                            </div>
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })}


            </div>
            
        </div>
        
        )
      
     
    }
}

export default Book;