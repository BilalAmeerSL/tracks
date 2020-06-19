import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
    const { signOut } = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text>Account Screen</Text>
            <Spacer>
                <Button title="Signout" onPress={signOut} />
            </Spacer>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({});
export default AccountScreen;