import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, Headline } from 'react-native-paper';
import { RootTabScreenProps } from '../types';
import { TextInput } from 'react-native-paper';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <Headline style={styles.title}>log in</Headline>
            <View style={styles.input}>
                <TextInput label="username"
                           mode='outlined'
                           outlineColor={Colors[colorScheme].tint}
                           placeholder="username" />
            </View>
            <View style={styles.input}>
                <TextInput label="password"
                           mode='outlined'
                           outlineColor={Colors[colorScheme].tint}
                           secureTextEntry
                           right={<TextInput.Icon name="eye" />}/>
            </View>
            <View style={styles.bottom}>
                <Button uppercase={false} mode="contained" onPress={() => navigation.navigate("Root", { screen : "Home" })}>log in</Button>
            </View>
            <View style={styles.bottom}>
                <Button uppercase={false} mode="outlined" onPress={() => navigation.navigate("Landing")}>back</Button>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'column',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        padding: 15,
    },
    input: {
        height: 75,
        padding: 10,
    },
    bottom : {
        paddingTop: 25,
        paddingBottom: 0,
        paddingLeft: 10,
        paddingRight: 10,
    },
});