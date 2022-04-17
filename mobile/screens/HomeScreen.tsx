import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Button, Headline, Card, Title, Paragraph } from 'react-native-paper';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Headline style={styles.title}>current location</Headline>
      <View style={styles.card}>
        <Card style={{ backgroundColor: '#A1B97B', marginTop: 30,}}>
          <Card.Content>
            <Title style={{ color: '#3E3E3E', fontFamily: 'Poppins', fontWeight: 'ExtraBold' }}>UCLA - College Campus</Title>
            <Paragraph style={{ color: '#3E3E3E', fontFamily: 'Poppins', paddingBottom: 20 }}>Popular photoshoot spot/building Royce Hall</Paragraph>
          </Card.Content>
          <Card.Cover source={require('../assets/images/royce.jpg')} />
        </Card>
        <Card.Actions>
          <Button uppercase={false} mode="text" ></Button>
        </Card.Actions>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  card: {
    height: 400,
    borderRadius: 10,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
