import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, ListItem, Button, Text } from 'react-native-elements';
import MyContext from '../context/my_context';
import { StyleSheet } from 'react-native';
import MainLogo from '../assets/utils/tools';
const StageTwo = () => {
    const context = useContext(MyContext);
    return (
        <>
            <MainLogo />
            <Text>The loser is...</Text>
            <Text style={styles.loserWrapper}>
                {context.state.result}
            </Text>
            <Button
                buttonStyle={styles.button}
                title="Try Again"
                onPress={() => context.getNewLoser()}//()=> click hma function call hmr
            />
            <Button
                buttonStyle={styles.button}
                title="Start Over"
                onPress={() => context.resetGame()}//without ()=> ma click ll sa tr nae call tl
            />
        </>
    )
}

const styles = StyleSheet.create({
    loserWrapper: {
        fontSize: 30,
        marginTop: 30
    },
    button: {
        backgroundColor: '#DB3EB1',
        marginTop: 20
    }
});

export default StageTwo;