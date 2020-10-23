import moment from 'moment';
export const createPost = (post) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      const firestore = getFirestore();
      firestore.collection('posts').add({
        ...post,
         createdAt: moment().format() ,
         author: profile.firstName + profile.lastName,
         authorId: authorId,
      }).then(() => {
        dispatch({ type: 'CREATE_POST_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_POST_ERROR' }, err);
      });
    }
  };