import { GraphQLServer } from 'graphql-yoga'

import { fakePosts, fakeUsers, fakeComments } from './fakeData';

const typeDefs = `
  type Query {
    posts(id: ID!): [Post!]!
    users: [User!]!
    user(id: ID!): User!
  } 

  type Post {
    id: ID!
    title: String!
    comments: [Comment!]!
    author: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Comment {
    id: ID!
    user: User!
    text: String!
  }
`;

const resolvers = {
  Query: {
    posts(parent, args, ctx, info) {
      if(args.id) {
        return fakePosts.filter((post) => {
          return post.id === args.id;
        });
      }
      return fakePosts;
    },
    users(parent, args, ctx, info) {
      return fakeUsers;
    },
    user(parent, args, ctx, info) {
      if(args.id) {
        return fakeUsers.find((user) => { 
          return user.id === args.id;
        });
      }
      return null;
    }
  },
  Post: {

  },
  User: {
    id(parent, args, ctx, info) {
      return parent.id;
    },
    name(parent, args, ctx, info) {
      return parent.name;
    },
    email(parent, args, ctx, info) {
      return args.email;
    },
    age(parent, args, ctx, info) {
      return args.age;
    }
  },
  Comment: {}
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log(`Server was started at http://localhost:4000`);
})