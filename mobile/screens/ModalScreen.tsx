import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Paragraph, Headline, Button } from 'react-native-paper';

export default function ModalScreen({ navigation }: RootTabScreenProps<'Modal'>) {
  return (
    <View style={styles.container}>
      <Headline style={styles.title}>congratulations! you've earned a souvenir</Headline>
      <Image style={{padding: 20}} source={require('../assets/images/planecoin.png')}/>
      <Paragraph style={{ color: '#3E3E3E', fontFamily: 'Poppins', padding: 20 }}>this is a rare souvenir found at UCLA</Paragraph>
      <Button mode="contained" uppercase={false} style={{ width: '50%', margin: 25,}} onPress={()=>(navigation.navigate('UserProfile'))}>go to profile</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
