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
            <View style={styles.input}>
                <TextInput style={styles.input} label="Username"
                           placeholder="Username" />
            </View>
            <View style={styles.input}>
            <TextInput style={styles.input} label="Password"
                       secureTextEntry
                       right={<TextInput.Icon name="eye" />}/>
            </View>
                <View style={styles.input}>
                    <Button mode="outlined" onPress={() => navigation.navigate("Landing")}>back</Button>
                </View>
                <View style={styles.input}>
                    <Button mode="contained" onPress={() => navigation.navigate("Root", { screen : "Home" })}>log in</Button>
                </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    input: {
        alignItems: 'flex-start',
        width: '100%',
        height: 75,
        padding: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        padding: 15,
    },
    end: {
        maxWidth: '100%',
        padding: 10,
        textAlign: 'auto',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
});
