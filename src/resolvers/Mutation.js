import uuidv4 from 'uuid/v4';

const Mutation = {
  createUser(parent, args, { db }, info) {
    // Check does some user from a list have identical email
    const emailTaken = db.fakeUsers.some((user) => {
      return user.email === args.data.email;
    });

    if (emailTaken) {
      throw new Error('We got email that was previously used');
    }

    const user = {
      id: uuidv4(),
      name: args.data.name,
      email: args.data.email,
      age: args.data.age
    }

    db.fakeUsers.push(user);

    return user;
  },
  updateUser(parent, args, { db }, info) {
    const { id, data } = args;

    const user = db.fakeUsers.find((user) => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    // checking did a user want to update this field. Because if no type will be null
    if (typeof data.email === 'string') {
      const emailTaken = db.fakeUsers.some((user) => user.email === data.email);

      // checking does current email using some where in database
      if (emailTaken) {
        throw new Error(`Email are using by another user`);
      }

      user.email = data.email;
    }

    if (typeof data.name === 'string') {
      user.name = data.name;
    }

    if (typeof data.age !== 'undefined') {
      user.age = data.age;
    }

    return user;
  },
  deleteUser(parent, args, { db }, info) {
    const userInder = db.fakeUsers.findIndex((user) => {
      return user.id === args.id
    });

    if (userInder === -1) {
      throw new Error(`Wrond Id of user`);
    }

    const deletedUser = db.fakeUsers.splice(userInder, 1);

    return deletedUser[0];
  }
};

export default Mutation;