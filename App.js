import React from 'react'
import { View } from 'react-native'

import Navigation from './src/components/Navigation/Navigation'

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: 24 }}>
      <Navigation />
    </View>
  );
}
