import React, {Component} from 'react';
// we imported this to bind graphql query
//import { gql } from 'apollo-boost';
//this particular importation is to be able to display the graphql query we constructed below
import  { graphql} from 'react-apollo';
import compose from "lodash.flowright";
import '../index.css';

import { addAuthorMutation, getBooksQuery} from '../queries/queries';


class AddAuthor extends Component {

        //this is to keep track of the different form field
        constructor(props){
            super(props);
            this.state = {
                name: '',
                age: ''
            };
        }


    //This is for submition of the form
    submitForm(e){
        e.preventDefault();
        // To add the mutation
        this.props.addAuthorMutation({
            variables:{
                name:this.state.name,
                age:this.state.age
                
            },
             refetchQueries:[{query:getBooksQuery}]
        });
    }
    render(){
            return (
                   <div id="container">
                <form id="add-author" onSubmit={this.submitForm.bind(this)} >
                    <h2>Add New Author with it books</h2>
                <div className="field">
                     <label>Author Name</label>
                     <input type="text" onChange={ (e)=> this.setState({name: e.target.value})} required/>
                </div>

                <div className="field">
                     <label>Age</label>
                     <input type="text" onChange={ (e)=> this.setState({age: e.target.value})} required/>
                </div>


                <button>+</button>
            </form>
               </div>
            );
        }
    }
export default compose(
     graphql(addAuthorMutation, {name: "addAuthorMutation"})
)(AddAuthor);