const Query = {
  posts(parent, args, ctx, info) {
    if (args.id) {
      return ctx.db.fakePosts.filter((post) => {
        return post.id === args.id;
      });
    }
    return ctx.db.fakePosts;
  },
  users(parent, args, ctx, info) {
    return ctx.db.fakeUsers;
  },
  user(parent, args, ctx, info) {
    if (args.id) {
      return ctx.db.fakeUsers.find((user) => {
        return user.id === args.id;
      });
    }
    return null;
  }
};

export default Query;