import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Accueil from "../Views/Home/Accueil"
import SavoirFaire from '../Views/Quality/SavoirFaire';
import Contact from '../Views/Contact/Contact';
import RealisationStackScreen from './RealisationStackScreen';

const HomeStack = createStackNavigator()

const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Home" component={Accueil} />
        <HomeStack.Screen name="Savoir" component={SavoirFaire} />
        <HomeStack.Screen name="Realisation" component={RealisationStackScreen} />
        <HomeStack.Screen name="Contact" component={Contact} />
    </HomeStack.Navigator>
);

export default HomeStackScreen;
