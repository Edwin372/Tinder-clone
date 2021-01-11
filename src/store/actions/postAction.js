import moment from 'moment';
export const createPost = (post) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const profile = getState().firebase.profile;
      console.log(profile)
      const userId = getState().firebase.auth.uid;
      const firestore = getFirestore();
      console.log('got here')
      firestore.collection('posts').add({
        ...post,
        likes: 0,
        view: 0,
        seriesId: null,
        createdAt: moment().format() ,
        author: profile.displayName,
        userId: userId,
        deleted: false,
      }).then(() => {
        dispatch({ type: 'CREATE_POST_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_POST_ERROR' }, err);
      });
    }
  };