import React, { Component } from 'react';
import {  Card } from 'react-bootstrap';


const BookItem = () => {
    return (
        <>
        <Card key={this.props.bookInfo.asin}>
        <Card.Body>
        <img src={this.props.bookInfo.img} style={{width : '50px', height: '100px'}}/>
       <Card.Title>{this.props.bookInfo.title}</Card.Title>
       <Card.Text>{this.props.bookInfo.category}</Card.Text></Card.Body>
       </Card>
       </>

    )
}




export default BookItem;