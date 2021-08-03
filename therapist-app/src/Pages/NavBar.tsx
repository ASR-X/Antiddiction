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
import { Plus } from './Plus'
import Dashboard from './Dashboard'
// import QRCode from './QRCode'

const { primary, white, black } = Colors

//Individaul Page Stacks
const HomeStack = createStackNavigator()
const DashboardStack = createStackNavigator()

const NavBar = (): React.ReactElement => {
  return <HomeStackScreen />
}

const BotNav = (): React.ReactElement => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'podium' : 'podium-outline'
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
      <Tab.Screen
        name={MainRoutes.Dashboard}
        component={DashboardStackScreen}
      />
    </Tab.Navigator>
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
        initialParams={{ Home: false }}
        options={({ navigation }) => ({
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

      <HomeStack.Screen
        component={BotNav}
        name={MainRoutes.Dashboard}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  )
}

const DashboardStackScreen = () => {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: white,
          shadowColor: white, // iOS
          elevation: 0, // Android
        },
        headerTintColor: black,
      }}
    >
      <DashboardStack.Screen
        name={MainRoutes.Dashboard}
        component={Dashboard}
        initialParams={{ Home: false }}
        options={({ navigation }) => ({
          title: 'Dashboard',
          headerLeftContainerStyle: { marginLeft: 10 },
          headerTitleStyle: {
            marginTop: 30,
            fontWeight: 'bold',
            color: primary,
            fontSize: 60,
          },
          headerRightContainerStyle: { marginRight: 10 },
        })}
      />
    </DashboardStack.Navigator>
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
