import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { store } from './store/store'
import WelcomeScreen from './screens/WelcomeScreen'
import { styles } from './styles'

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <WelcomeScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  )
}

export default App
