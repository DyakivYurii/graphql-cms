const fakePosts = [
  {
    id: 'post-1',
    authorID: 'u-1',
    commetsId: [
      'c-1',
      'c-3',
    ],
    title: 'Amazing title'
  },
  {
    id: 'post-2',
    authorID: 'u-3',
    commetsId: [
      'c-2'
    ],
    title: 'New title'
  },
  {
    id: 'post-3',
    authorID: 'u-2',
    commetsId: [],
    title: 'About creating GraphQL server'
  }
];

const fakeUsers = [
  {
    id: 'u1',
    postId: ['post-1'],
    commentsId: ['c-2'],
    name: 'Yurii',
    email: 'yurii@gmail.com',
    age: 23
  },
  {
    id: 'u2',
    postId: ['post-3'],
    commentsId: [],
    name: 'Flaffy',
    email: 'flaffy@gmail.com',
  },
  {
    id: 'u3',
    postId: ['post-2'],
    commentsId: ['c-1', 'c-3'],
    name: 'Top',
    email: 'top@gmail.com',
    age: 23
  }
];

const fakeComments = [
  {
    id: 'c-1',
    authorID: 'u-3',
    postId: 'post-1',
    text: 'this is my first comment to the article'
  },
  {
    id: 'c-2',
    authorID: 'u-1',
    postId: 'post-2',
    text: 'Another comment'
  },
  {
    id: 'c-3',
    authorID: 'u-3',
    postId: 'post-1',
    text: 'Cool idea'
  }
];

export { fakePosts, fakeUsers, fakeComments };