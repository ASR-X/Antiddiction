import React, { useState } from 'react'
import * as Linking from 'expo-linking'

// Colors

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { Colors } from '../Components/styles'
import { MainStack, MainRoutes } from './routes'
import { useReduxDispatch, useReduxSelector } from '../Redux'
import { selectUser } from '../Redux/slices/user'

//Screens Auth
import SplashScreen from '../Pages/SplashScreen'
import FoodAccounts from '../Pages/FoodAccounts'

import { getAuth } from 'firebase/auth'
import Firebase from '../../config/Firebase.js'

//Screens Main
import NavBar from '../Pages/NavBar'

const { primary, tertiary, white, black } = Colors
import userSlice from '../Redux/slices/user'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Question1 } from '../Pages/Question1'
import { Question2 } from '../Pages/Question2'

export type resetParams = {
  mode: string
  oobCode: string
}

const HomeNavigator = (): React.ReactElement => {
  return <NavBar />
}

const SurveyNavigator = (): React.ReactElement => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: black,
        headerTransparent: true,
        headerTitle: '',
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerLeft: ()=> null,
      }}
      initialRouteName={MainRoutes.SplashScreen}
    >
      <MainStack.Screen
        name={MainRoutes.SplashScreen}
        component={SplashScreen}
      />
      <MainStack.Screen
        name={MainRoutes.Question1}
        component={Question1}
      />
      <MainStack.Screen
        name={MainRoutes.Question2}
        component={Question2}
      />
    </MainStack.Navigator>
  )
}

const MainNavigator = (): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)
  if (!reduxUser.age) return <SurveyNavigator />
  else return <HomeNavigator />
}

const MainNavigation = (): React.ReactElement => {
  return <MainNavigator />
}

export default MainNavigation
