import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import mocks from './mocks' <-- comment out
import resolvers from './resolvers';

const typeDefs = `



type Query 	{
  author(firstName: String, lastName: String): Author
  
  allAuthors: [Author]
  getFortuneCookie: String # we'll use this later
  trainer(name:String):Trainer
  allEmployees:EmployeeResponse
  empList(name:String):response
  employees1:[employee!]!

}
type response{
employees:[employee]
}
type employee {
  id: String
  employee_name: String
  employee_salary:String 

}

type EmployeeResponse {
 
  name: String
  employees: [employee]
  # employee will be returned in a EmployeeFeed object wrapper
   employeeFeed(cursor: String): EmployeeFeed  
}

type EmployeeFeed {
  # cursor specifies the place in the list where we left off
  cursor: String!
  
  # this is a chunk of messages to be returned
  employees: [employee]!
}


type PaginatedEmployee {
  # cursor specifies the place in the list where we left off
  cursor: String!
  
  # this is a chunk of messages to be returned
  employees: [employee]!
}

input MessageInput {
  content: String
  author: String
}

type Message {
  id: ID!
  content: String
  author: String
}

type Response {
 
  status: String
}

type Mutation {
  createMessage(id: ID!,content: String): Message
  createMessage1(input: MessageInput): Message
  updateMessage(id: ID!, input: MessageInput): Message
}


type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}

type Trainer {
  id: String!
  name: String!
  ownedPokemons: [Pokemon]
}

type Pokemon {
  id: String!
  url: String!
  name: String!
  trainer: Trainer
}

`;

// const schema = makeExecutableSchema({ typeDefs });

const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema, mocks }); <-- comment out
export default schema;

