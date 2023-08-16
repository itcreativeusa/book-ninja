const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
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
  }

  type Mutation {
    createUser(body: User!): User
    login(email: String!, password: String!): User
    saveBook(body: Book!): User
    deleteBook(bookId: String!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
