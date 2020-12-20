const initState = {
       
}

const commentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_COMMENT_SUCCESS':
          console.log('create comment success');
          return state;
        case 'CREATE_COMMENT_ERROR':
          console.log('create comment error');
          return state;
        default:
          return state;
    }
}

export default commentReducer