import React, {Component} from 'react';
import  { graphql } from 'react-apollo';
import {getBookQuery} from '../queries/queries';

class BookDetails extends Component {
    displayBookDetails(){
        const { book } =  this.props.data;
        if(book){
            return(
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <h1>All books by this author</h1>
                    <div className="header">
            <div class="container">
                        {book.author.books.map(item=>{
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>No book selected...</div>
            )
        }
    }
    render(){
            return (
                  <div id="container">
                     
                {this.displayBookDetails()}
                </div>
            );
        }
    }
export default graphql(getBookQuery,{
    options: (props) => {
        return {
            variables: {
                id: props.bookid
            }
        }
    }
})(BookDetails);
