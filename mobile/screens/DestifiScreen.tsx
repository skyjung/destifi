import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Button} from "react-native-paper";

export default function DestifiScreen({ navigation }: RootTabScreenProps<'Destifi'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destifi</Text>
      <Button mode="contained" onPress={() => navigation.navigate("Login")}>generate</Button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
