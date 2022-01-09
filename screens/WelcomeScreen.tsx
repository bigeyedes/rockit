import React from 'react'
import { View, ImageBackground, Image } from 'react-native'
import { welcomeScreen } from '../styles'
import { rockItLogo, welcomeImageSource } from './constans'

const WelcomeScreen = (): JSX.Element => (
  <View style={welcomeScreen.general} testID="welcome-page-test-id">
    <ImageBackground source={welcomeImageSource} resizeMode="cover" style={welcomeScreen.image}>
      <Image source={rockItLogo} style={welcomeScreen.logo} testID="welcome-page-logo-test-id" />
    </ImageBackground>
  </View>
)

export default WelcomeScreen
