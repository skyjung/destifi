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
            <Text style={styles.title}>generate your destinations:</Text>
            <Button mode="contained" uppercase={false} onPress={()=>setVisibility(false)}>destifi</Button>
        </View>
    );
}

export function generatePlaces({isVisible}){
    return(
        isVisible ? null :
            <View style={styles.card}>
                <Card style={{ backgroundColor: '#A1B97B'}}>
                    <Card.Content>
                        <Title style={{ color: '#3E3E3E', fontFamily: 'Poppins', fontWeight: 'ExtraBold' }}>UCLA</Title>
                        <Paragraph style={{ color: '#3E3E3E', fontFamily: 'Poppins', paddingBottom: 20 }}>Royce Hall: where students go to take basic LinkedIn headshots</Paragraph>
                    </Card.Content>
                    <Card.Cover source={require('../assets/images/royce.jpg')} />
                    <Card.Actions>
                        <Button uppercase={false} mode="outlined" >add</Button>
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
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
