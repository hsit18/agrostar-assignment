import React, { Component } from 'react';
import { Provider } from 'react-redux';

import reduxStore from './store';

import Layout from './screens/Layout';
class App extends Component {
    render() {
        return (
            <Provider store={reduxStore}>
                <Layout />
            </Provider>  
        );
    }
}

export default App;