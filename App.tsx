import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { Button, StyleSheet, View, Dimensions } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { Colors, WelcomeTitle } from './src/Components/styles'

// React Navigation stack
import RootStack from './src/Navigators/MainNavigation'
import store from './src/Redux'

import * as Linking from 'expo-linking'

//Screen Dimensions
const { height } = Dimensions.get('screen')
const height_logo = height * 0.32

const App = (): React.ReactElement => {
  console.disableYellowBox = true

  return (
    <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
    </Provider>
  )
}

export default App
