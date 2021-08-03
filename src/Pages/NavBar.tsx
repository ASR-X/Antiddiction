import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

//Screens
import Home from './Home'
import Calendar from './Calendar'
import Analytics from './Analytics'

import Connect from './Connect'
import UsFood from './UsFood'
import EditProfile from './EditProfile'
import CardListScreen from './CardListScreen'
import CardItemDetails from './CardItemDetail'
import Favorites from './Favorites'
import Support from './Support'
import About from './About'
import Payment from './Payment'
import Search from './Search'
import QR from './QRCode'

//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createStackNavigator } from '@react-navigation/stack'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons'

//Routes
import { MainRoutes } from './../Navigators/routes'

//Colors
import { Colors, ProfilePicture } from '../Components/styles'
import { DrawerActions, NavigationContainer } from '@react-navigation/native'

const { primary, white, black } = Colors

//Individaul Page Stacks
const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const UsFoodsStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const NavBar = (): React.ReactElement => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'podium' : 'podium-outline'
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline'
          } else if (route.name === 'Connect') {
            iconName = focused ? 'people' : 'people-outline'
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: primary,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name={MainRoutes.Home} component={HomeStackScreen} />
      <Tab.Screen name={MainRoutes.Calendar} component={Calendar} />
      <Tab.Screen name={MainRoutes.Analytics} component={Analytics} />
      <Tab.Screen name={MainRoutes.Connect} component={Connect} />
    </Tab.Navigator>
  )
}

export default NavBar

const HomeStackScreen = ({ navigation }) => {
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
        name={MainRoutes.QRCode}
        component={qrcode}
        options={{
          title: 'qrcode',
          headerLeftContainerStyle: { marginLeft: 10 },
          headerRightContainerStyle: { marginRight: 10 },
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name={MainRoutes.QRCode} />
            </View>
          ),
        }}
      />

      <HomeStack.Screen
        component={QR}
        name={MainRoutes.QRCode}
        options={{
          title: 'What do you need?',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />
    </HomeStack.Navigator>
  )
}

const qrcode = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(MainRoutes.QRCode)}>
      <FontAwesome name={'qrcode'} size={30} color={black} />
    </TouchableOpacity>
  )
}
