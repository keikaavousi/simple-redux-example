const LoginReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return (state = true);
    case "LOGGED_OUT":
      return (state = false);
    default:
      return false;
  }
};
export default LoginReducer;
