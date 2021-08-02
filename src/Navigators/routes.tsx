import { createStackNavigator } from '@react-navigation/stack'
import CardItemDetails from '../Pages/CardItemDetail'
import { resetParams } from './MainNavigation'

export enum MainRoutes {
  SplashScreen = 'Splash Screen',
  Question1 = 'Question 1',
  Question2 = 'Question 2',
  Question3 = 'Question 3',
  Welcome = 'Welcome',
  Home = 'Home',
  Profile = 'Profile',
  NavBar = 'NavBar',
  Sysco = 'Sysco',
  UsFoods = 'US Foods',
  Therapy = 'Therapy',
  Survey = 'Survey',
  EditProfile = 'Edit Profile',
  CardListScreen = 'Card List',
  CardItemDetails = 'Card Item Details',
  NewUserWelcome = 'New User Welcome',
  FoodAccounts = 'Food Account',
  Favorites = 'Favorites',
  Support = 'Support',
  About = 'About',
  Payment = 'Payment',
  Search = 'Search',
}

export type MainStackParamList = {
  [MainRoutes.SplashScreen]: undefined
  [MainRoutes.Welcome]: undefined
  [MainRoutes.Home]: { update: boolean } | undefined // just an example, "update" will later be used for version checks
  [MainRoutes.Profile]: undefined
  [MainRoutes.Question1]: undefined
  [MainRoutes.Question2]: undefined
  [MainRoutes.Question3]: undefined
  [MainRoutes.NavBar]: undefined
  [MainRoutes.Sysco]: undefined
  [MainRoutes.UsFoods]: undefined
  [MainRoutes.EditProfile]: undefined
  [MainRoutes.CardListScreen]: undefined
  [MainRoutes.CardItemDetails]: undefined
  [MainRoutes.NewUserWelcome]: undefined
  [MainRoutes.FoodAccounts]: undefined
  [MainRoutes.Favorites]: undefined
  [MainRoutes.Support]: undefined
  [MainRoutes.About]: undefined
  [MainRoutes.Payment]: undefined
  [MainRoutes.Search]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()
