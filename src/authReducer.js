const initialState = {
    isLoggedIn: false,
    currentUser: null,
    users: [
      { username: 'hamza', password: '123' },
      { username: 'admin', password: 'password' },
      
    ]
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        const { username, password } = action.payload;
        const isValidUser = state.users.some(user => user.username === username && user.password === password);
        return {
          ...state,
          isLoggedIn: isValidUser,
          currentUser: isValidUser ? username : null
        };

      default:
        return state;
    }
  };
  
  export default authReducer;
  