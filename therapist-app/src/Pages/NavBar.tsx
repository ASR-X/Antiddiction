import React from 'react'
import { TouchableOpacity, View } from 'react-native'

//Screens
import Home from './Home'

//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createStackNavigator } from '@react-navigation/stack'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Routes
import { MainRoutes } from '../Navigators/routes'

//Colors
import { Colors, ProfilePicture } from '../Components/styles'
import {Plus} from './Plus'
// import QRCode from './QRCode'

const { primary, white, black } = Colors

//Individaul Page Stacks
const HomeStack = createStackNavigator()

const NavBar = (): React.ReactElement => {
  return (
    <HomeStackScreen />
  )
}

export default NavBar

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: white,
          shadowColor: white, // iOS
          elevation: 0, // Android
        },
        headerTintColor: black,
      }}
    >
      <HomeStack.Screen
        name={MainRoutes.Home}
        component={Home}
        options={ ({ navigation }) => ({
          title: 'Patients',
          headerLeftContainerStyle: { marginLeft: 10 },
          headerTitleStyle: {
            marginTop: 30,
            fontWeight: 'bold',
            color: primary,
            fontSize: 60,
          },
          headerRightContainerStyle: { marginRight: 10 },
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 40,
              }}
            >
              <PlusIcon navigation={navigation} />
            </View>
          ),
        })}
      />

      <HomeStack.Screen
        component={Plus}
        name={MainRoutes.Plus}
        options={{
          title: 'Plus sign',
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  )
}

const PlusIcon = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(MainRoutes.Plus)}
      style={{ marginHorizontal: 20 }}
    >
      <Ionicons name={'add-outline'} size={30} color={black} />
    </TouchableOpacity>
  )
}
