import { StyleSheet, TouchableOpacity, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ProfilePic from "../components/ProfilePic";
// @ts-ignore
import sample from "../assets/images/nathan.jpg";

// @ts-ignore
const ProfileName = ({ onPress, name }) => (
  <TouchableOpacity onPress={onPress} style={styles.profileNameContainer}>
    <Text style={styles.profileNameText}>{name}</Text>
  </TouchableOpacity>
)

// @ts-ignore
const CurrentLocation = ({locations, selectedDisplay, setDisplay}) => (
  locations.map(([location, rarity]) => (
    <View style={styles.column}>
      <TouchableOpacity
        key={location}
        onFocus={() => setDisplay({[location]:rarity})}
        style={[
          styles.locationButton,
          selectedDisplay === location && styles.selectedButton,
        ]}
      >
        <Text
          style={[
            styles.locationText,
            selectedDisplay === location && styles.selectedButton,
          ]}
        >
          {location}
          {rarity}
        </Text>
      </TouchableOpacity>
    </View>
  ))
)

// @ts-ignore
const PastLocations = ({locations}) => {
  // @ts-ignore
  return (
    locations.map(([location, rarity]) => (
      <View style={styles.column}>
        <TouchableOpacity
          key={location}
          style={[
            styles.locationButton
          ]}
        >
          <Text
            style={[
              styles.locationText,
            ]}
          >
            {location}
            {rarity}
          </Text>
        </TouchableOpacity>
      </View>
    ))
  );
}


export default function Profile({ navigation }: RootTabScreenProps<'UserProfile'>) {
  const [selectedDisplay, setDisplay] = useState({"":0});
  const sampleLocations = {"UCLA":1, "LACMA":1, "Hollywood Sign":2, "Griffith Observatory":2, "USC":3};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", justifyContent: 'center' }}>
        {/*<Text style={styles.title}>Sky Jung</Text>*/}
        <View style={styles.profileContainer}>
          <ProfilePic source={sample}></ProfilePic>
          <ProfileName name="Nathan Zhang" onPress={()=>{}}/>
          <Text style={styles.username}>@nathan.zhang</Text>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <CurrentLocation
        locations={{"Melrose Ave.": 1, "Getty Villa": 2, "The Grove": 3}}
        selectedDisplay={selectedDisplay}
        setDisplay={setDisplay}
        ></CurrentLocation>
        <PastLocations
          locations={sampleLocations}
        ></PastLocations>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 10,
    paddingTop: 10,
    alignSelf: "center"
  },
  separator: {
    marginTop: 10,
    marginBottom: 15,
    height: 1,
    width: '80%',
  },
  profileContainer: {
    paddingTop: 40
  },
  profileNameContainer: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#1F1717",
    borderWidth: 0.5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignSelf: 'center',
    width: '75%'
  },
  profileNameText: {
    fontSize: 20,
    color: "#1F1717",
    fontWeight: "600",
    alignSelf: "center",
    textTransform: "capitalize"
  },
  locationButton: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#1F1717",
    borderWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: '100%'
  },
  locationContainer: {

  },
  locationText: {
    fontSize: 16,
    color: "#1F1717",
    fontWeight: "normal",
    alignSelf: "center"
  },
  column: {
    flexDirection: "column",
    paddingBottom: 15,
    width: '55%'
  },
  selectedButton: {
    borderWidth: 0.5,
    backgroundColor: "#FBACAC"
  },
  selectedText: {
    fontWeight: "600",
  }
});
