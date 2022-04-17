import React from 'react';
import { StyleSheet, Image, ScrollView, SafeAreaView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Button, Headline, Card, Title, Paragraph } from 'react-native-paper';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <Title style={styles.title}>current location</Title>
      <View style={styles.card}>
        <Card style={{ backgroundColor: '#A1B97B', marginTop: 5, marginBottom: 20}}>
          <Card.Content>
            <Title style={{ color: '#3E3E3E', fontFamily: 'Poppins', fontWeight: 'ExtraBold' }}>UCLA - College Campus</Title>
            <Paragraph style={{ color: '#3E3E3E', fontFamily: 'Poppins', paddingBottom: 20 }}>Popular photoshoot spot/building Royce Hall</Paragraph>
          </Card.Content>
          <Card.Cover source={require('../assets/images/royce.jpg')} />
        </Card>
      </View>

      <View style = {styles.container}>
        <Image style={styles.card} source={require('../assets/images/uclamap.png')}></Image>
        <Paragraph style={{ color: '#3E3E3E', fontFamily: 'Poppins', padding: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim curabitur turpis at massa, mollis volutpat, neque mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim curabitur turpis at massa, mollis volutpat, neque mauris.
        </Paragraph>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  card: {
    padding: 30,
    borderRadius: 10,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
