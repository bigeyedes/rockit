import * as React from 'react'
import { render } from '@testing-library/react-native'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import WelcomeScreen from '../WelcomeScreen'

let wrapper: any

const mountWelcomeScreen = () => {
  return render(<WelcomeScreen />)
}

describe('WelcomeScreen', () => {
  beforeEach(async () => {
    wrapper = await mountWelcomeScreen()
  })

  it('Should render WelcomeScreen component', async () => {
    const welcomeScreenWrapper = await wrapper.getByTestId('welcome-page-test-id')
    const welcomeScreenLogo = await wrapper.getByTestId('welcome-page-logo-test-id')

    expect(welcomeScreenWrapper).toBeTruthy()
    expect(welcomeScreenLogo).toBeTruthy()
  })
})
