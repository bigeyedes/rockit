import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import WelcomeScreen from './screens/WelcomeScreen'
import { styles } from './styles'

const App = () => {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      <StatusBar style="auto" />
    </View>
  )
}

export default App
