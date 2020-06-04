import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import data from '../jsons/history.json';

class Book extends Component {
   constructor(props) {
       super(props);
       
       this.state = {
           books: data.slice(0, 1)
       }
   }
    render() {
        return (

        <div className='container'>
            <div className='row'>
                {this.state.books.map(book => {
                    return (

                        <div className="col-sm-6 col-md-3 col-lg-2 ">
                        <Card>
                            <Card.Img src={book.img}/>
                         </Card>
                        <Card.Body>
                            <Card.Title className='title-size'>{book.title}</Card.Title>
                           
                        </Card.Body>
                       
                        </div>
                    )
                })}
            </div>
        </div>
        )
      
     
    }
}

export default Book;