import React, { useState } from 'react'
import { View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Accueil from './src/Views/Home/Accueil'
import SavoirFaire from './src/Views/Quality/SavoirFaire'
import Realisation from './src/Views/Realisation/Realisation'
import Contact from './src/Views/Contact/Contact'
import Description from './src/Views/Realisation/Description/Descriptions'
import Context from "./src/components/Navigation/components/Context"
import { navigationRef } from "./src/components/Navigation/components/NavigationRef"


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function App() {
  const [press, setpress] = useState('Home')

  return (
    <View style={{ flex: 1, marginTop: 24 }}>
      <Context.Provider value={{ press: [press, setpress]}}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Accueil} />
            <Stack.Screen name="Savoir" component={SavoirFaire} />
            <Stack.Screen name="Realisation" component={Realisation} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Description" component={Description} />
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    </View>
  );
}
