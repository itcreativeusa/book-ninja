const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input UserInput {
    username: String
    email: String
    password: String
  }

  input BookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    userById(_id: ID!): User
    books: [Book]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
