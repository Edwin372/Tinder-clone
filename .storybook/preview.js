import { addDecorator, configure } from '@storybook/react';
import React from "react";
import { MemoryRouter } from "react-router"
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from '../src/store/reducer/rootReducer';
import fbConfig from '../src/config/firebaseConfig'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer,
    composeEnhancer(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}), // redux binding for firebase
        reduxFirestore(fbConfig) // redux bindings for firestore
    )
);
addDecorator(story =>
    <Provider store={store}>
       <MemoryRouter initialEntries={['/']}>
           {story()}
       </MemoryRouter>
    </Provider>
);

// configure(require.context('../src', true, /\.stories\.js$/), module);