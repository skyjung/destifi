import React from 'react';
import { useState } from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Button, Card, Title, Paragraph} from "react-native-paper";
import {Subheader} from "react-native-paper/lib/typescript/components/List/List";

export default function DestifiScreen({ navigation }: RootTabScreenProps<'Destifi'>) {
    const [isVisible, setVisibility] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Destifi</Text>
            <View>
                {generatePlaces({isVisible})}
            </View>
            <Button mode="contained" uppercase={false} onPress={()=>setVisibility(false)}>generate</Button>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}

export function generatePlaces({isVisible}){
    return(
        isVisible ? null :
            <View style={styles.card}>
                <Card>
                    <Card.Content>
                        <Title>UCLA</Title>
                        <Paragraph>royce hall: where students go to take basic linkedin headshots</Paragraph>
                    </Card.Content>
                    <Card.Cover source={require('../assets/images/royce.jpg')} />
                    <Card.Actions>
                        <Button>add</Button>
                    </Card.Actions>
                </Card>
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
    card: {
        width: 300,
        height: 200,
        borderRadius: 10,
        fontSize: 10,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
