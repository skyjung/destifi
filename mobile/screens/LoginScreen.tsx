import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, Headline } from 'react-native-paper';
import { RootTabScreenProps } from '../types';
import { TextInput } from 'react-native-paper';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {useState} from "react";
import axios from 'axios';
import ReactOnRails from 'react-on-rails'

async function handleSubmit(data, navigation) {
    console.log('logging in');
    let csrfToken = ReactOnRails.authenticityToken() || false;
    await axios.post("http://localhost:3000/login", (data), {
       headers: {
           'X-CSRF-Token': csrfToken,
           'Access-Control-Allow-Origin': '*',
           'Content-Type': 'application/json'
       }
    }).then(() => navigation.navigate("Root", { screen : "Home" }));
}

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
    const colorScheme = useColorScheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Headline style={styles.title}>log in</Headline>
            <View style={styles.input}>
                <TextInput label="email"
                           mode='outlined'
                           outlineColor={Colors[colorScheme].tint}
                           placeholder="email"
                           onChangeText={(text) => setEmail(text)}/>
            </View>
            <View style={styles.input}>
                <TextInput label="password"
                           mode='outlined'
                           outlineColor={Colors[colorScheme].tint}
                           secureTextEntry
                           right={<TextInput.Icon name="eye" />}
                           onChangeText={(text) => setPassword(text)}/>
            </View>
            <View style={styles.bottom}>
                {//navigation.navigate("Root", { screen : "Home" })}
                }
                <Button uppercase={false} mode="contained" onPress={() => handleSubmit(
                    {session: {email: email, password: password}}, navigation
                )}>log in</Button>
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