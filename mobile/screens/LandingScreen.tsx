import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, Headline } from 'react-native-paper';
import { RootTabScreenProps } from '../types';

export default function LandingScreen({ navigation }: RootTabScreenProps<'Landing'>) {

    return (
        <View style={styles.container}>
            <Headline>Destifi</Headline>
            <Button mode="contained" onPress={() => navigation.navigate("Login")}>log in</Button>
            <Button mode="text" onPress={() => navigation.navigate("Signup")}>sign up</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
