import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native';
import MyContext from './src/context/my_context';
import StageOne from './src/components/stage_one';
import StageTwo from './src/components/stage_two';

class App extends Component {
    static contextType = MyContext; //access to the context
    render() {
        //alert(this.context.state.stage)
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.context.state.stage === 1 ?
                        <StageOne />
                        :
                        <StageTwo />
                    }
                </View>
            </ScrollView>
        )
    }
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 80 : 30
    }
});