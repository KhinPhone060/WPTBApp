import React, { Component } from 'react';

import MyContext from './my_context';//create a instance of the context

class MyProvider extends Component {//need to use provider to wrap the whole app when using Context
    state = {//main state of our application
        stage: 1,
        player: [],
        result: ''
    };
    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider;
