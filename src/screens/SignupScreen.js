import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
    const { state, signUp, clearErrorMessage } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signUp}
            />
            <NavLink
                text="Already have an account? Sing in instead"
                routeName="Signin"
            />
        </View>
    );
};
SignupScreen.navigationOptions = () => {
    return { headerShown: false };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    }
});
export default SignupScreen;