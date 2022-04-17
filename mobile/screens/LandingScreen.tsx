import React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, Headline } from 'react-native-paper';
import { RootTabScreenProps } from '../types';

export default function LandingScreen({ navigation }: RootTabScreenProps<'Landing'>) {

    return (
        <View style={styles.container}>
            <Headline style={styles.title}>destifi</Headline>
            <View style={styles.input}>
                <Button uppercase={false} mode="contained" onPress={() => navigation.navigate("Login")}>log in</Button>
            </View>
            <View style={styles.input}>
                <Button uppercase={false} mode="text" onPress={() => navigation.navigate("Signup")}>sign up</Button>
            </View>
            <View style={styles.padding}>
                <Image style={styles.image} source={require('../assets/images/mountain.png')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        width: 390,
        height: 350,
        alignSelf: 'flex-end',
    },
    padding: {
        paddingTop: 50,
    },
    input: {
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
        paddingBottom: 50,
        textTransform: 'none',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
