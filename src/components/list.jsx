import React, { Component } from 'react';
import { Row, Card } from 'react-bootstrap';
import BookItem from './BookItem';

class List extends Component {
    state = {
        books : []
    }
   
    render() {
        
        return (
          <div className='container'>
            <Row>
                <h1>{this.props.text}</h1>
            </Row>
            <Row>
                {this.state.books.map((item) => 
                   <BookItem bookInfo={item}/>
                )}
            </Row>
            </div>
        )
    }
    componentDidMount = async () => {
        const resp = await fetch('https://striveschool.herokuapp.com/books?offset=0&limit=10');
        if (resp.ok) {
            const books = await resp.json();
            console.log(books);
            this.setState({
                books: books
            })
           
        }
    }

}

export default List;