/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types';
const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Landing: {
                screens: {
                    LandingScreen: 'landing',
                },
            },
            Root: {
                screens: {
                    Home: {
                        screens: {
                            HomeScreen: 'home',
                        },
                    },
                    Destifi: {
                        screens: {
                            DestifiScreen: 'destifi',
                        },
                    },
                    UserProfile: {
                        screens: {
                            UserProfileScreen: 'userprofile',
                        },
                    },
                },
            },
            Signup: {
                screens: {
                    LandingScreen: 'signup',
                },
            },
            Modal: 'modal',
            Login: 'login',
            NotFound: '*',
        },
    },
};

export default linking;