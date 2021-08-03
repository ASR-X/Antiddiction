import React, { useState } from 'react'
import * as Linking from 'expo-linking'
import * as Animatable from 'react-native-animatable'
// Colors

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { Colors, QuestionHeaderView } from '../Components/styles'
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
import { Question3 } from '../Pages/Question3'
import { View, StyleSheet } from 'react-native'
import { Question4 } from '../Pages/Question4'
import { Question5 } from '../Pages/Question5'
import { Question6 } from '../Pages/Question6'
import { Question7 } from '../Pages/Question7'
import { Question8 } from '../Pages/Question8'
import { Question9 } from '../Pages/Question9'

export type resetParams = {
  mode: string
  oobCode: string
}

const HomeNavigator = (): React.ReactElement => {
  return <NavBar />
}

const fade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
})

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
        headerLeft: () => null,
        cardOverlay: () => (
          <>
            <QuestionHeaderView />
            <View style={styles.footer} />
          </>
        ),
      }}
      initialRouteName={MainRoutes.SplashScreen}
    >
      <MainStack.Screen
        name={MainRoutes.SplashScreen}
        component={SplashScreen}
      />
      <MainStack.Screen name={MainRoutes.Question1} component={Question1} />
      <MainStack.Screen name={MainRoutes.Question2} component={Question2} />
      <MainStack.Screen name={MainRoutes.Question3} component={Question3} />
      <MainStack.Screen name={MainRoutes.Question4} component={Question4} />
      <MainStack.Screen name={MainRoutes.Question5} component={Question5} />
      <MainStack.Screen name={MainRoutes.Question6} component={Question6} />
      <MainStack.Screen name={MainRoutes.Question7} component={Question7} />
      <MainStack.Screen name={MainRoutes.Question8} component={Question8} />
      <MainStack.Screen name={MainRoutes.Question9} component={Question9} />
    </MainStack.Navigator>
  )
}

const MainNavigator = (): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)
  if (!reduxUser.Home) return <SurveyNavigator />
  else return <HomeNavigator />
}

const MainNavigation = (): React.ReactElement => {
  return <MainNavigator />
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  textInput: {
    color: white,
    fontSize: 40,
    fontWeight: 'bold',
    borderBottomColor: white,
    marginTop: 30,
    width: 50, // Add this to specify bottom border color
    borderBottomWidth: 3, // Add this to specify bottom border thickness
  },
})

export default MainNavigation
