export const serilizeAddUser = (user) => {
  JSON.stringify({
    email: user.email,
    username: user.username,
    password: user.password,
    name: {
      firstname: user.name.firstname,
      lastname: user.name.lastname
    },
    address: {
      city: user.city,
      street: user.street
    },
    phone: user.phone
  });
};
