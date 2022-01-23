import React, { useEffect } from 'react'
import { View, ImageBackground, Image } from 'react-native'
import { welcomeScreen } from '../styles'
import { rockItLogo, welcomeImageSource } from './constans'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import { fetchUsers } from '../store/slices/userSlice'

const WelcomeScreen = (): JSX.Element => {
  const users = useAppSelector(state => state.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <View style={welcomeScreen.general} testID="welcome-page-test-id">
      <ImageBackground source={welcomeImageSource} resizeMode="cover" style={welcomeScreen.image}>
        <Image source={rockItLogo} style={welcomeScreen.logo} testID="welcome-page-logo-test-id" />
      </ImageBackground>
    </View>
  )
}

export default WelcomeScreen
