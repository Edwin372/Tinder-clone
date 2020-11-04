const initState = {
       
}

const test = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TEST_SUCCESS':
          console.log('create post success');
          return state;
        case 'CREATE_TEST_ERROR':
          console.log('create post error');
          return state;
        default:
          return state;
    }
}

export default test