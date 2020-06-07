import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import { FaCar, FaCartPlus } from 'react-icons/fa';
import NavBar from './Navbar';
import MyBadge from './MyBadge';
// import Comment from 'Comment';

class Book extends Component {
       state = {
           books: this.props.books,
           count : 0
       }
 
   handleIncrement = () => {
  
       this.setState({ count : this.state.count + 1})
   }

   

    render() {
        
        return (
            
        <div className='container'>
            <div className='row'>
            
                {this.state.books
                // .filter(book => book.title.toLowerCase().indexOf(this.state.search) !== 1)
                .map((book, i) => {
                    return (
                   
                        <div className="col-sm-6 col-md-3 col-lg-2"  key={i}>
                        <Card className='card-item'>
                            <Card.Img src={book.img} className='img-card'/>
                        
                        <Card.Body className='body-card'>
                            <Card.Title className='title-size'>{book.title}</Card.Title>
                            
                            <div className='btn-group'>
                                <button type="button" className="btn btn-primary btn-sm comment">Add comment</button>

                            
                                <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleIncrement}><FaCartPlus /></button>
                              <span className='ml-2'> {this.state.count}</span>
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