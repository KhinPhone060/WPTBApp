import React, { Component } from 'react';
import Toast from 'react-native-toast-message';

import MyContext from './my_context';//create a instance of the context

class MyProvider extends Component {//need to use provider to wrap the whole app when using Context
    state = {//main state of our application
        stage: 1,
        player: ['Kaung', 'Khin', 'Haru'],
        result: ''
    };

    addPlayerHandler = (name) => {
        this.setState((preState) => ({
            player: [
                ...preState.player,
                name
            ]
        }))
    }

    removePlayerHandler = (idx) => {
        let newArray = this.state.player
        newArray.splice(idx, 1);
        this.setState({ player: newArray })
    }

    nextHandler = () => {
        const { player } = this.state;
        if (player.length < 2) {
            Toast.show({
                text1: 'Add More Players 👋',
                type: 'info',
                position: 'bottom'
            });
        } else {
            this.setState({
                stage: 2
            }, () => {
                this.generateLoserHandler()
            })
        }
    }

    generateLoserHandler = () => {
        const { player } = this.state;
        this.setState({
            result: player[Math.floor(Math.random() * player.length)]
        })
    }

    resetGameHandler = () => {
        this.setState({
            stage: 1,
            player: [],
            result: ''
        })
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    addPlayer: this.addPlayerHandler,
                    removePlayer: this.removePlayerHandler,
                    nextStage: this.nextHandler,
                    getNewLoser: this.generateLoserHandler,
                    resetGame: this.resetGameHandler
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider;
