import React from 'react';
import { StyleSheet, Button } from 'react-native';
import {useState} from "react";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { TextInput } from 'react-native-paper';


function handleSubmit (userdata) {
    console.log('handling submit');
    let response = fetch('http://localhost:3000/signup', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userdata}),
        }).then((data) => {data.json(); console.log(data)});
}

export default function SignupScreen ({ navigation }: RootTabScreenProps<'Signup'>) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput label="Name"
                   placeholder="Full Name"
                   style={styles.input}
                   onChangeText={(text) => setName(text)}/>
        <TextInput label="Email"
                   placeholder="Email"
                   style={styles.input}
                   onChangeText={(text) => setEmail(text)}/>
        <TextInput label="Password"
                   secureTextEntry
                   style={styles.input}
                   right={<TextInput.Icon name="eye"/>}
                   onChangeText={(text) => setPassword(text)}/>
        <TextInput label="Confirm Password"
                   secureTextEntry
                   style={styles.input}
                   right={<TextInput.Icon name="eye"/>}
                   onChangeText={(text) => setConfPassword(text)}/>
        <Button title="back" mode="outlined" onPress={() => navigation.navigate("Landing")}>back</Button>
        <Button title="sign-up" mode="contained" onPress={() => handleSubmit({name})}>Sign Up</Button>
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
    input: {
        fontSize: 20,
        height: 40,
        width: 300,
        borderRadius: 40,
        marginTop: 10,
        padding: 10
    }
});

