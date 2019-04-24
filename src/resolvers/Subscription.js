const Sybscription = {
  count: {
    subscribe: (parent, args, { pubsub }, info) => {
      let count = 0;
      const chanel = '1451312';
      setInterval(() => pubsub.publish(chanel, { count: count++ }), 500);
      return pubsub.asyncIterator(chanel);
    }
  },
  user: {
    subscribe: (parent, args, { db, pubsub }, info) => {
      const { id } = args;
      const post = db.fakeUsers.find((user) => user.id === id);

      if (!post) {
        throw new Error('Post not found');
      }

      return pubsub.asyncIterator(`user ${id}`);
    }
  }
};

export default Sybscription;