import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native-paper';
import { RootTabScreenProps } from '../types';
import { TextInput } from 'react-native-paper';

export default function SignupScreen({ navigation }: RootTabScreenProps<'Signup'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <TextInput label="Email"
                       placeholder="Email" />
            <TextInput label="Username"
                       placeholder="Username" />
            <TextInput label="Password"
                       secureTextEntry
                       right={<TextInput.Icon name="eye" />}/>
            <TextInput label="Confirm Password"
                       secureTextEntry
                       right={<TextInput.Icon name="eye" />}/>
            <Button mode="contained" onPress={() => navigation.navigate("Root", { screen: "Home"})}>sign up</Button>
            <EditScreenInfo path="/screens/SignupScreen.tsx" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '70%',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});