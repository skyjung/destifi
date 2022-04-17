import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, Headline } from 'react-native-paper';
import { RootTabScreenProps } from '../types';

export default function LandingScreen({ navigation }: RootTabScreenProps<'Landing'>) {

    return (
        <View style={styles.container}>
            <Headline style={styles.title}>Destifi</Headline>
            <View style={styles.input}>
                <Button mode="contained" onPress={() => navigation.navigate("Login")}>log in</Button>
            </View>
            <View style={styles.input}>
                <Button mode="text" onPress={() => navigation.navigate("Signup")}>sign up</Button>
            </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',
        padding: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        padding: 15,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
