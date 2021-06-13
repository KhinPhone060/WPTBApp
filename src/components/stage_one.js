import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, ListItem, Button, Text } from 'react-native-elements';
import MyContext from '../context/my_context';

const StageOne = () => {
    const context = useContext(MyContext);
    return (
        <>
            <Formik
                initialValues={{ player: '' }}
                validationSchema={Yup.object({//creating rules
                    player: Yup.string()
                        .min(3, 'Player must be more than 3 characters')
                        .max(15, 'Must be 15 character maximum')
                        .required('Please enter the names')
                })}//yup instance and pass the object
                onSubmit={(values, { resetForm }) => { //get the values and resetForm clear the input
                    alert(values.player)
                    resetForm()
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                    <>
                        <Text>Who Pay The Bill?</Text>
                        <Input
                            placeholder="Enter name"
                            leftIcon={{ type: 'antdesign', name: 'adduser' }}
                            inputContainerStyle={{
                                marginHorizontal: 50,
                                marginTop: 50
                            }}
                            renderErrorMessage={errors.player && touched.player}
                            errorMessage={errors.player}
                            errorStyle={{
                                marginHorizontal: 50
                            }}

                            onChangeText={//handle input
                                handleChange('player')//pass the name of the player from input
                            }
                            onBlur={
                                handleBlur('player')
                            }
                            value={values.player}//actual value of the input
                        />
                        <Button
                            buttonStyle={styles.button}
                            title="Add Player"
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
        </>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DB3EB1',
        marginTop: 20
    }
});
export default StageOne;