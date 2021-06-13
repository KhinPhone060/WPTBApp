import React, { Component } from 'react';

import MyContext from './my_context';//create a instance of the context

class MyProvider extends Component {//need to use provider to wrap the whole app when using Context
    state = {//main state of our application
        stage: 1,
        player: [],
        result: ''
    };

    addPlayerHandler = (name) => {
        this.setState((preState, props) => ({
            player: [
                ...preState.player,
                name
            ]
        }))
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    addPlayer: this.addPlayerHandler
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider;
