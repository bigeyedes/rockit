import * as React from 'react'
import renderer from 'react-test-renderer'
import Welcome from '../Welcome'

it('Welcome screen', () => {
    const welcomeScreen = renderer.create(<Welcome />)
    expect(welcomeScreen).toMatchSnapshot()
})
