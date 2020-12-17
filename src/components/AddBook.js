import React, {Component} from 'react';
// we imported this to bind graphql query
//import { gql } from 'apollo-boost';
//this particular importation is to be able to display the graphql query we constructed below
import  { graphql} from 'react-apollo';
import compose from "lodash.flowright";
import {getAuthorsQuery, addBookMutation,getBooksQuery} from '../queries/queries';

class AddBook extends Component {
    //this is to keep track of the different form field
    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorid: ''
        };
    }

    displayAuthors(){
        var data = this.props.getAuthorsQuery;
        if(data.loading){
            return(<option disabled>Loading authors</option>)
        } else {
            return data.authors.map(author => {
            return (<option key={author.id} value={author.id}>{author.name}</option>);
            })
        }
    }
//This is for submition of the form
    submitForm(e){
        e.preventDefault();
        // To add the mutation
        this.props.addBookMutation({
            variables:{
                name:this.state.name,
                genre:this.state.genre,
                authorid:this.state.authorid
            },
             refetchQueries:[{query:getBooksQuery}]
        });
    }
    render(){
            return (
                <div id="container">
                <div id="parentHorizontalTab">
                <div className="resp-tabs-container hor_1">
                <div>

                <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                     <label>Book Name</label>
                     <input type="text" onChange={ (e)=> this.setState({name: e.target.value})} required/>
                </div>

                <div className="field">
                     <label>Genre</label>
                     <input type="text" onChange={ (e)=> this.setState({genre: e.target.value})} required/>
                </div>

                <div className="field">
                     <label>Author</label>
                     <select onChange={ (e)=> this.setState({authorid: e.target.value})}>
                         <option>Select author</option>
                         { this.displayAuthors() }
                     </select>
                </div>

                <button>+</button>
            </form>
            </div>
            </div>
            </div>
            </div>
            );
        }
    }
export default compose(
    graphql(getAuthorsQuery,{name: "getAuthorsQuery"}),
     graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);
