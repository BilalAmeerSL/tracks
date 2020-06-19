import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({ navigation }) => {
    const { state, signIn, clearErrorMessage } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText="Sign In for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signIn}
            />
            <NavLink
                text="Don't have an account? Sign up instead"
                routeName="Signup"
            />
        </View>
    );
};
SigninScreen.navigationOptions = () => {
    return { headerShown: false };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    }
});
export default SigninScreen;