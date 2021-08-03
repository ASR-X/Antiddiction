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

//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createStackNavigator } from '@react-navigation/stack'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
          return <Ionicons name={iconName} size={size} color={color} />
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
        name={MainRoutes.Home}
        component={Home}
        options={{
          title: 'Home',
          headerLeftContainerStyle: { marginLeft: 10 },
          headerRightContainerStyle: { marginRight: 10 },
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <QRComp navigation={navigation} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name={MainRoutes.CardListScreen}
        component={CardListScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        })}
      />
      <HomeStack.Screen
        name={MainRoutes.Favorites}
        component={Favorites}
        options={{
          title: 'Your Favorites',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />
      <HomeStack.Screen
        name={MainRoutes.CardItemDetails}
        component={CardItemDetails}
        options={({ route }) => ({
          title: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: white,
          headerLeftContainerStyle: { marginLeft: 10 },
        })}
      />
      <HomeStack.Screen
        component={Support}
        name={MainRoutes.Support}
        options={{
          title: 'Customer Support',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />
      <HomeStack.Screen
        component={Payment}
        name={MainRoutes.Payment}
        options={{
          title: 'Payment',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />

      <HomeStack.Screen
        component={About}
        name={MainRoutes.About}
        options={{
          title: 'About',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />

      <HomeStack.Screen
        component={Search}
        name={MainRoutes.Search}
        options={{
          title: 'QR Code',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />
    </HomeStack.Navigator>
  )
}

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: white,
          shadowColor: white, // iOS
          elevation: 0, // Android
        },
        headerTintColor: black,
      }}
    >
      <ProfileStack.Screen
        name={MainRoutes.Profile}
        component={Profile}
        options={{
          title: '',
          headerStyle: { borderBottomColor: white },
          headerLeftContainerStyle: { marginLeft: 15 },
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={white}
              color={black}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              backgroundColor={white}
              color={black}
              onPress={() => navigation.navigate(MainRoutes.EditProfile)}
            />
          ),
        }}
      />
      <ProfileStack.Screen
        name={MainRoutes.EditProfile}
        options={{
          title: 'Edit Profile',
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
        component={EditProfile}
      />
    </ProfileStack.Navigator>
  )
}

const UsFoodsStackScreen = ({ navigation }) => {
  return (
    <UsFoodsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: white,
          shadowColor: black, // iOS
          elevation: 0, // Android
        },
        headerTintColor: black,
      }}
    >
      <UsFoodsStack.Screen
        name={MainRoutes.UsFoods}
        component={UsFood}
        options={{
          title: 'lalala',
          headerShown: false,
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={white}
              color={black}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </UsFoodsStack.Navigator>
  )
}

const QRComp = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(MainRoutes.Search)}
      style={{ marginHorizontal: 20 }}
    >
      <Ionicons name={'qr-code-outline'} size={30} color={black} />
    </TouchableOpacity>
  )
}

const SearchIcon = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(MainRoutes.Search)}>
      <Ionicons name={'search'} size={30} color={black} />
    </TouchableOpacity>
  )
}
