import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './../components/Spacer'

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                label="Email"
                placeholder="Email"
                onChangeText={setEmail} />
            <Spacer />
            <Input
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                label="Password"
                placeholder="Password"
                onChangeText={setPassword} />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    link: { color: 'blue' }
});
export default AuthForm;