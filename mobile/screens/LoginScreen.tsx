import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native-paper';
import { RootTabScreenProps } from '../types';
import { TextInput } from 'react-native-paper';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <TextInput style={styles.input} label="Username"
                       placeholder="Username" />
            <TextInput style={styles.input} label="Password"
                       secureTextEntry
                       right={<TextInput.Icon name="eye" />}/>
            <Button mode="contained" onPress={() => navigation.navigate("Root", { screen: "Home"})}>Log in</Button>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        //flex: 1,
        alignItems: 'flex-start',
        width: 300,
        height: 40,
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
