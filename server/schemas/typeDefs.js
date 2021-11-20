const { gql } = require("apollo-server-express");
//define fields that are accessible from the Class model
const typeDefs = gql`
  type Query {
      me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: SavedBookInfo): User
    removeBook(bookId: String!): User

  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  
`;

module.exports = typeDefs;
