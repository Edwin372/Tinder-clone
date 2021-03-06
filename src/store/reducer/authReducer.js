const initState = {
    authError: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'LOGIN_ERROR':
        console.log('login error');
        return {
          ...state,
          authError: 'Login failed'
        }
      case 'LOGIN_SUCCESS':
        console.log('login success');
        return {
          ...state,
          authError: null
        }
      case 'SIGNOUT_SUCCESS':
        console.log('signout success');
        return state
      case 'SIGNUP_SUCCESS':
        console.log('signup success')
        return {
          ...state,
          authError: null
        }
      case 'SIGNUP_ERROR':
        console.log('signup error')
        return {
          ...state,
          authError: action.err.message
        }
      case 'SIGNUP_WITH_GOOGLE_SUCCESS':
        console.log('signup with google success')
        return {
          ...state,
          authError: null
        }
      case 'SIGNUP_WITH_GOOGLE_ERROR':
        console.log('signup with google failed')
        return {
          ...state,
          authError: action.error.message
        }
        case 'SIGNUP_WITH_FACEBOOK_SUCCESS':
          console.log('signup with facebook success')
          return {
            ...state,
            authError: null
          }
        case 'SIGNUP_WITH_FACEBOOK_ERROR':
          console.log('signup with facebook failed')
          console.log(action.error.message)

          return {
            ...state,
            authError: action.error.message
          }
      default:
        return state
    }
  };
  
  export default authReducer;