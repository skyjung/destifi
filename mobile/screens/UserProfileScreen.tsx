import { StyleSheet, TouchableOpacity, ScrollView, StatusBar, SafeAreaView, Image } from 'react-native';
import { useState } from 'react';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ProfilePic from "../components/ProfilePic";
import Carousel from "../components/Carousel";
// @ts-ignore
import sample from "../assets/images/nathan.jpg";
// @ts-ignore
import desticoins from "../assets/images/desticoins.png";

// @ts-ignore
const ProfileName = ({ onPress, name }) => (
  <TouchableOpacity onPress={onPress} style={styles.profileNameContainer}>
    <Text style={styles.profileNameText}>{name}</Text>
  </TouchableOpacity>
)

// @ts-ignore
const CurrentLocation = ({locations, selectedDisplay, setDisplay}) => (
  locations.map((location) => (
    <View style={styles.column}>
      <TouchableOpacity
        key={location.location}
        onFocus={() => setDisplay({location})}
        style={[
          styles.locationButton,
          selectedDisplay === {location} && styles.selectedButton,
        ]}
      >
        <Text
          style={[
            styles.locationText,
            selectedDisplay === {location} && styles.selectedButton,
          ]}
        >
          {location.location}
          {location.rarity}
        </Text>
      </TouchableOpacity>
    </View>
  ))
)

// @ts-ignore
const PastLocations = ({locations}) => {
  // @ts-ignore
  return (
    locations.map((location) => (
      <View style={styles.column}>
        <TouchableOpacity
          key={location.location}
          style={[
            styles.locationButton
          ]}
        >
          <Text
            style={[
              styles.locationText,
            ]}
          >
            {location.location}
            {location.rarity}
          </Text>
        </TouchableOpacity>
      </View>
    ))
  );
}


export default function Profile({ navigation }: RootTabScreenProps<'UserProfile'>) {
  const [selectedDisplay, setDisplay] = useState({});
  const sampleLocations = [{location:"UCLA", rarity:1},
                            {location:"LACMA", rarity:2},
                            {location:"Hollywood Sign", rarity:1},
                            {location:"Griffith Oberservatory", rarity:1}];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "flex-start" }}>
        <View style={styles.profileContainer}>
          <View style={styles.profileLeftContainer}>
            <ProfilePic source={sample}></ProfilePic>
            <Text style={styles.username}>@nathan.zhang</Text>
          </View>
          <View style={styles.profileNameContainer}>
            <ProfileName name="Nathan Zhang" onPress={()=>{}}/>
            <Text style={styles.traveltitle}>Certified Traveler</Text>
            <View style={{alignItems:"flex-start"}}>
              <Image style={styles.desticoins} source={desticoins}></Image>
            </View>
          </View>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.subtitle}>Currently Exploring</Text>
        {/*<SafeAreaView style={styles.section}>*/}
          <CurrentLocation
            locations={sampleLocations}
            selectedDisplay={selectedDisplay}
            setDisplay={setDisplay}
          ></CurrentLocation>
        {/*</SafeAreaView>*/}

        <View>
          <Text style={styles.subtitle}>Past Locations</Text>
          <PastLocations
            locations={sampleLocations}
          ></PastLocations>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingTop: StatusBar.currentHeight
  },
  section: {
    flex: 1,
    flexGrow:1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 10,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  traveltitle: {
    fontSize: 14,
  },
  desticoins: {
    paddingBottom: 40,
    alignSelf: "flex-start",
    width: 120,
    height: 50,
    resizeMode: "contain"
  },
  separator: {
    marginTop: 10,
    marginBottom: 15,
    height: 1,
    width: '80%',
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 40,
    alignSelf: "flex-start",
  },
  profileLeftContainer: {
    flexDirection: 'column',
    flex: 1,
    textAlign: "left",
    paddingLeft: 40,
    paddingRight: 0,
    maxWidth:180
  },
  profileNameContainer: {
    flexDirection: 'column',
    flex: 1,
    textAlign: "left",
    alignSelf: "flex-start",
    paddingRight: 0,
    paddingLeft: 0
  },
  profileNameText: {
    fontSize: 20,
    color: "#1F1717",
    fontWeight: "800",
    textTransform: "capitalize",
    paddingTop: 30,
  },
  locationButton: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#1F1717",
    borderWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 100
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
