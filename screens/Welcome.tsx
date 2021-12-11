import React from 'react'
import { View, ImageBackground, Image } from 'react-native'
import { welcomeScreen } from '../styles'
import { rockItLogo, welcomeImageSource } from './constans'

const Welcome = (): JSX.Element => (
  <View style={welcomeScreen.general}>
    <ImageBackground source={welcomeImageSource} resizeMode="cover" style={welcomeScreen.image}>
      <Image source={rockItLogo} style={welcomeScreen.logo} data-test-id="welcome-page-logo-test-id"/>
    </ImageBackground>
  </View>
)

export default Welcome
