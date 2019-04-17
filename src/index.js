import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
// This is applicatiion schema
const typeDefs = `
  type Query {
    me: User!
  }

  type User {
    id: ID!,
    name: String!
    email: String!
    age: Int
    post: Post!
  }

  type Post {
    id: ID!,
    title: String!
    text: String!
  }
`

// Resolvers
// funcitons - for different query, that know what to return
// when we run in
const resolvers = {
  Query: {
    me() {
      return {
        id: `324351`,
        name: 'Yurii',
        email: 'yurii@gmail.com',
        post: {
          id: `78142`,
          title: `First title to post`,
          text: `This is text for post`
        }
      }
    }
  }
}

// new instance of GraphQLserver
const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

// start server
server.start(() => {
  console.log(`Server started`);
})