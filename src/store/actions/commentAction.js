export const createComment = (newComment) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
    
      const firestore = getFirestore();
      firestore.collection('comments').add({
        ...newComment,
        likes: 0,
      }).then(() => {
        dispatch({ type: 'CREATE_COMMENT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_COMMENT_ERROR' }, err);
      });
    }
  };