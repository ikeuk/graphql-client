import React, {Component} from 'react';
// we imported this to bind graphql query
//import { gql } from 'apollo-boost';
//this particular importation is to be able to display the graphql query we constructed below
import  { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props){
       super(props);
       this.state = {
           selected: null
       } 
    }

    displayBooks(){
        var data = this.props.data;
        if(data.loading){
            return (<div>Loading...</div>);
        } else {
            return data.books.map(book => {
                return (
                    <div id="btt">
                       <ul>
        <li key={book.id} onClick={ (e) => {this.setState({selected:book.id})}}><a href="#"> 
                           {book.name}</a>
                           </li>
                       </ul>
                   </div>
                       );
                })
        }
    }

    render(){
            return (
                <div id="book-list">
                <ul id="book-list">
                <br /><br /><br /><br /> <br /><br /><br /><br />
                    {this.displayBooks()}
                </ul>
                <BookDetails bookid={this.state.selected}/>
                </div>
            );
        }
    }
export default graphql(getBooksQuery)(BookList);
