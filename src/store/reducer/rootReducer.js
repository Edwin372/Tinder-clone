import authReducer from './authReducer'
import postReducer from './postReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import testReducer from './testReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  test: testReducer
});

export default rootReducer

// the key name will be the data property on the state object