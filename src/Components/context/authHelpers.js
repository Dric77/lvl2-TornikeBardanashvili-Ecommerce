export const AuthHelpers = {
  checkData: function (userData) {
    if (userData.user) {
      return userData.user;
    } else {
      return userData;
    }
  },
  checkUserLogedIn: function (user, setErrorMessage) {
    if (user.token) {
      this.checkData(user);
      localStorage.setItem("userToken", user.token.access_token);
      localStorage.setItem("isLoggedIn", "1");
    } else {
      setErrorMessage("Wrong Email or Password");
    }
  }
};
