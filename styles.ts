import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const welcomeScreen = StyleSheet.create({
  general: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: '35%',
    height: '35%',
    resizeMode: 'contain',
    position: 'absolute',
    top: '10%',
  },
})
