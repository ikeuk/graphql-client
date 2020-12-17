import { gql } from "apollo-boost";

const getBooksQuery = gql`
{
   books{
        name
        id
    }
}
`
const getAuthorsQuery = gql`
{
   authors{
        name
        id
    }
}
`
const addBookMutation = gql`
mutation($name:String!,$genre:String!,$authorid:ID!){
    addBook(name:$name, genre:$genre, authorid:$authorid){
        name
        id
    }
}
`
//This is adding Author mutation
const addAuthorMutation = gql`
mutation($name:String!, $age:Int!){
    addAuthor(name: $name, age: $age){
      name
      age
    }
  }
`

//quering single book
const getBookQuery= gql`
query($id: ID) {
    book(id: $id){
        id
        name
        genre
        author{
            id
            name
            age
            books{
                name
                id
            }
        }
    }
}
`
export {getAuthorsQuery, getBooksQuery, addBookMutation,getBookQuery,addAuthorMutation};