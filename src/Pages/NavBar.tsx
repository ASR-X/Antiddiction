import React from 'react'
import { TouchableOpacity, View } from 'react-native'

//Screens
import Home from './Home'
import DateList from './DateList'
import Analytics from './Analytics'

import Connect from './Connect'

//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createStackNavigator } from '@react-navigation/stack'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Routes
import { MainRoutes } from './../Navigators/routes'

//Colors
import { Colors, ProfilePicture, QuestionText } from '../Components/styles'
import { DrawerActions, NavigationContainer } from '@react-navigation/native'
import QRCode from './QRCode'
import { height, width } from 'styled-system'
// import QRCode from './QRCode'

const { primary, white, black } = Colors

//Individaul Page Stacks
const HomeStack = createStackNavigator()
const CalendarStack = createStackNavigator()
const GraphStack = createStackNavigator()

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
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: primary,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name={MainRoutes.Home} component={HomeStackScreen} />
      <Tab.Screen name={MainRoutes.DateList} component={CalendarStackScreen} />
      <Tab.Screen name={MainRoutes.Analytics} component={GraphsStackScreen} />
      {/* <Tab.Screen name={MainRoutes.Connect} component={Connect} /> */}
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
        name={MainRoutes.Home}
        component={Home}
        options={{
          title: 'Home',
          headerLeftContainerStyle: {
            marginLeft: 20,
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            flex: 1,
          },
          headerTitleStyle: {
            // marginTop: 30,
            fontWeight: 'bold',
            color: primary,
            fontSize: 60,
            width: 400,
            height: 80,
            marginTop: 15,
            marginLeft: 40,
          },
          headerRightContainerStyle: { marginRight: 10 },
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <QRComp navigation={navigation} />
            </View>
          ),
        }}
      />

      <HomeStack.Screen
        component={QRCode}
        name={MainRoutes.QRCode}
        options={{
          title: 'QR Code',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />
    </HomeStack.Navigator>
  )
}

const CalendarStackScreen = ({ navigation }) => {
  return (
    <CalendarStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: white,
          shadowColor: white, // iOS
          elevation: 0, // Android
        },
        headerTintColor: black,
      }}
    >
      <CalendarStack.Screen
        name={MainRoutes.DateList}
        component={DateList}
        options={{
          title: 'Calendars',
          headerLeftContainerStyle: { marginLeft: 10 },
          headerTitleStyle: {
            //marginTop: 30,
            fontWeight: 'bold',
            color: primary,
            fontSize: 60,
            width: 400,
            height: 80,
            marginTop: 15,
          },
          headerRightContainerStyle: { marginRight: 10 },
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                //marginTop: 40,
              }}
            ></View>
          ),
        }}
      />
    </CalendarStack.Navigator>
  )
}

const GraphsStackScreen = ({ navigation }) => {
  return (
    <GraphStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: white,
          shadowColor: white, // iOS
          elevation: 0, // Android
        },
        headerTintColor: black,
      }}
    >
      <GraphStack.Screen
        name={MainRoutes.Analytics}
        component={Analytics}
        options={{
          title: 'Analytics',
          headerLeftContainerStyle: { marginLeft: 10 },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: primary,
            fontSize: 60,
            width: 400,
            height: 80,
            marginTop: 15,
          },
          headerRightContainerStyle: { marginRight: 10 },
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 40,
              }}
            ></View>
          ),
        }}
      />
    </GraphStack.Navigator>
  )
}
const QRComp = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(MainRoutes.QRCode)}
      style={{ marginHorizontal: 20 }}
    >
      <Ionicons name={'qr-code-outline'} size={30} color={black} />
    </TouchableOpacity>
  )
}
