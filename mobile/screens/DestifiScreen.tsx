import React from 'react';
import { useState } from 'react';
import {Image, ImageBackground, ScrollView, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Button, Card, Title, Paragraph} from "react-native-paper";
import {Subheader} from "react-native-paper/lib/typescript/components/List/List";

export default function DestifiScreen({ navigation }: RootTabScreenProps<'Destifi'>) {
    const [isVisible, setVisibility] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{alignItems: "center", justifyContent:"center"}}>
                <Text style={styles.title}>Destifi - Los Angeles, CA</Text>
                {generatePlaces({isVisible})}
                <Text style={styles.title}>generate your destinations:</Text>
                <Button mode="contained" uppercase={false} style={{ width: '50%', marginBottom: 25,}} onPress={()=>setVisibility(false)}>destifi</Button>
                <Text style={{marginBottom: 40, fontSize: 14}}>24 hours until your next roll:</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export function generatePlaces({isVisible}){
    return(
        isVisible ? null :
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Card style={{ backgroundColor: '#A1B97B', marginTop: 30,}}>
                    <Card.Content>
                        <Title style={{ color: '#3E3E3E', fontFamily: 'Poppins', fontWeight: 'ExtraBold' }}>UCLA - College Campus</Title>
                        <Paragraph style={{ color: '#3E3E3E', fontFamily: 'Poppins', paddingBottom: 20 }}>Popular photoshoot spot/building Royce Hall</Paragraph>
                    </Card.Content>
                    <Card.Cover source={require('../assets/images/royce.jpg')} />
                    <Card.Actions>
                        <Button uppercase={false} mode="outlined" >add</Button>
                    </Card.Actions>
                </Card>

                <Card style={{ backgroundColor: '#A1B97B', marginTop: 30,}}>
                    <Card.Content>
                        <Title style={{ color: '#3E3E3E', fontFamily: 'Poppins', fontWeight: 'ExtraBold' }}>Joshua Tree National Park</Title>
                        <Paragraph style={{ color: '#3E3E3E', fontFamily: 'Poppins', paddingBottom: 20 }}>Park to hike, stargaze, and explore the desert</Paragraph>
                    </Card.Content>
                    <Card.Cover source={require('../assets/images/joshtree.jpg')} />
                    <Card.Actions>
                        <Button uppercase={false} mode="outlined" >add</Button>
                    </Card.Actions>
                </Card>

               <Card style={{ backgroundColor: '#A1B97B', marginTop: 30, marginBottom: 30}}>
                    <Card.Content>
                        <Title style={{ color: '#3E3E3E', fontFamily: 'Poppins', fontWeight: 'ExtraBold' }}>The Broad - Art Museum</Title>
                        <Paragraph style={{ color: '#3E3E3E', fontFamily: 'Poppins', paddingBottom: 20 }}>Modern arts museum located in Downtown LA</Paragraph>
                    </Card.Content>
                    <Card.Cover source={require('../assets/images/broad.jpg')} />
                    <Card.Actions>
                        <Button uppercase={false} mode="outlined" >add</Button>
                    </Card.Actions>
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#FFF5ED"
    },
    title: {
        padding: 20,
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
