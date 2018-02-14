import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers/appReducer';
import AppWithNavigationState, {middleware} from './src/AppNavigator';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore(AppReducer, applyMiddleware(middleware));
    }

    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default App;