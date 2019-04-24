const User = {
  id(parent, args, ctx, info) {
    return parent.id;
  },
  name(parent, args, ctx, info) {
    return parent.name;
  },
  email(parent, args, ctx, info) {
    return parent.email;
  },
  age(parent, args, ctx, info) {
    return parent.age;
  }
};

export default User;