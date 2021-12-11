import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import Welcome from './screens/Welcome'
import { styles } from './styles'

const App = () => {
  return (
    <View style={styles.container}>
      <Welcome />
      <StatusBar style="auto" />
    </View>
  )
}

export default App
