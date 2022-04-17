import React from 'react';
import { StyleSheet } from 'react-native';
import {useState} from "react";
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Button, Headline } from 'react-native-paper';
import { RootTabScreenProps } from '../types';
import { TextInput } from 'react-native-paper';
import axios from 'axios';

async function handleSubmit () {
    console.log('handling submit');
    let data = {name: "Test test", email: "test@gmail.com", password: "password", password_confirmation: "password"};
    await axios.post("http://localhost:3000/users", (data), {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
}

export default function SignupScreen({ navigation }: RootTabScreenProps<'Signup'>) {
    const colorScheme = useColorScheme();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfPassword] = useState("");

    return (
        <View style={styles.container}>
            <Headline style={styles.title}>sign up</Headline>
            <View style={styles.input}>
                <TextInput label="name"
                           mode='outlined'
                           outlineColor={Colors[colorScheme].tint}
                           placeholder="Name"
                           onChangeText={(text) => setName(text)}/>
            </View>
            <View style={styles.input}>
                <TextInput label="email"
                           mode='outlined'
                           outlineColor={Colors[colorScheme].tint}
                           onChangeText={(text) => setEmail(text)}
                           placeholder="Email" />
            </View>
            <View style={styles.input}>
                <TextInput label="password"
                           mode='outlined'
                           outlineColor={Colors[colorScheme].tint} onChangeText={(text) => setPassword(text)}
                           //secureTextEntry
                           right={<TextInput.Icon name="eye" />}/>
            </View>
            <View style={styles.input}>
                <TextInput label="confirm password"
                           mode='outlined'
                           outlineColor={Colors[colorScheme].tint} onChangeText={(text) => setConfPassword(text)}
                           //secureTextEntry
                           right={<TextInput.Icon name="eye" />}/>
            </View>
            <View style={styles.bottom}>
                <Button uppercase={false} mode="contained" onPress={() => handleSubmit(
                    //{name: "Test test", email: "test@gmail.com", password: "password", password_confirmation: "password"}
                )}>sign up</Button>
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
        textTransform: "none",
    },
    input: {
        height: 75,
        padding: 10,
        borderRadius: 5,
    },
    bottom : {
        paddingTop: 25,
        paddingBottom: 0,
        paddingLeft: 10,
        paddingRight: 10,
    },
});
