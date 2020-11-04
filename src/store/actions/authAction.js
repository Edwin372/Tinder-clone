export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }
  
  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }

  export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(async (resp) => {
        await firebase.auth().currentUser.sendEmailVerification()
        return firestore.collection('users').doc(resp.user.uid).set({
          dob: newUser.dob,
          displayName: newUser.username,
          bio: '',
          avatar: '',
          backgroundImage: ''
        });
      }).then(resp => {
        console.log( firebase.auth().currentUser)
        // console.log(firebase.auth().currentUser.sendEmailVerification)
        
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }

  export const sendEmailVerification = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().currentUser.sendEmailVerification()
      .then( () => {
            console.log('verification sent')
      }).then(() => {
        dispatch({ type: 'VERIFICATION_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'VERIFICATION_ERR', err});
      });
    }
  }

  export const signInWithSocialAccount =  (provider) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
     firebase.login({ provider: provider, type: 'popup' })
      .then(function(result) {
        dispatch({ type: `SIGNUP_WITH_${provider.toUpperCase()}_SUCCESS` });
      }).catch(function(error) {
        dispatch({ type:  `SIGNUP_WITH_${provider.toUpperCase()}_ERROR`, error });
      });
      
    }
  }