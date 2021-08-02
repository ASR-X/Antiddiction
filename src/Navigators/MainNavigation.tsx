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
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import ConfirmEmail from '../Pages/ConfirmEmail'
import OTP from '../Pages/OTP'
import ResetPassword from '../Pages/ResetPassword'
import Confirmation from '../Pages/Confirmation'
import NewUserWelcome from '../Pages/NewUserWelcome'
import FoodAccounts from '../Pages/FoodAccounts'

import { getAuth } from 'firebase/auth'
import Firebase from '../../config/Firebase.js'

//Screens Main
import NavBar from '../Pages/NavBar'

const { primary, tertiary, white, black } = Colors
import userSlice from '../Redux/slices/user'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from '../Components/DrawerContent'

export type resetParams = {
  mode: string
  oobCode: string
}

const HomeNavigator = (): React.ReactElement => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name={MainRoutes.NavBar} component={NavBar} />
    </Drawer.Navigator>
  )
}

const AuthNavigator = (): React.ReactElement => {
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
      }}
      initialRouteName={MainRoutes.SplashScreen}
    >
      <MainStack.Screen
        name={MainRoutes.SplashScreen}
        component={SplashScreen}
      />
      <MainStack.Screen
        name={MainRoutes.SignIn}
        component={SignIn}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name={MainRoutes.SignUp}
        component={SignUp}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name={MainRoutes.NewUserWelcome}
        component={NewUserWelcome}
        options={{ headerShown: true }}
      />
      <MainStack.Screen
        name={MainRoutes.FoodAccounts}
        component={FoodAccounts}
        options={{ headerShown: true }}
      />

      <MainStack.Screen
        name={MainRoutes.ConfirmEmail}
        component={ConfirmEmail}
        options={{ headerTintColor: white }}
      />
      <MainStack.Screen name={MainRoutes.OTP} component={OTP} />
      <MainStack.Screen
        name={MainRoutes.ResetPassword}
        component={ResetPassword}
        options={{ headerShown: true }}
      />
      <MainStack.Screen
        name={MainRoutes.Confirmation}
        component={Confirmation}
      />
    </MainStack.Navigator>
  )
}

const MainNavigator = (): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)
  let auth = true
  const user = getAuth(Firebase).currentUser
  if (user && reduxUser.uid === user.uid) auth = true
  else if (user && reduxUser.uid !== user.uid) {
    userSlice.actions.setUser(user)
    auth = true
  } else if (!user && reduxUser.uid) {
    userSlice.actions.setUser({
      email: null as string,
      fullName: null as string,
      uid: null as string,
    })
    auth = false
  } else auth = false

  if (!auth) return <AuthNavigator />
  else return <HomeNavigator />
}

const MainNavigation = (): React.ReactElement => {
  return <MainNavigator></MainNavigator>
}

export default MainNavigation
