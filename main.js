import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/container/app';
import { Provider } from 'react-redux'
import { createStore } from "redux";
import reducer, {initialState} from './src/reducer/rootReducer';

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));