import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
//components
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';

//apollo client setup

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

class App extends Component {
  render(){
  return (
        <ApolloProvider client={client}>
            <h1>Reading Value from GraphQl</h1>
          <BookList />
          <br /><br />
          <AddBook />
          <hr/>
          <AddAuthor />
    
        </ApolloProvider>
  );
}
}
export default App;
