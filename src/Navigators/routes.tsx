import { createStackNavigator } from '@react-navigation/stack'
import CardItemDetails from '../Pages/CardItemDetail'
import { resetParams } from './MainNavigation'

export enum MainRoutes {
  SplashScreen = 'Splash Screen',
  SignIn = 'Sign In',
  SignUp = 'Sign Up',
  Welcome = 'Welcome',
  Home = 'Home',
  ConfirmEmail = 'Confirm Email',
  OTP = 'OTP',
  ResetPassword = 'Reset Password',
  Confirmation = 'Confirmation',
  Profile = 'Profile',
  NavBar = 'NavBar',
  Sysco = 'Sysco',
  UsFoods = 'US Foods',
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
  [MainRoutes.SignIn]: undefined
  [MainRoutes.SignUp]: undefined
  [MainRoutes.Welcome]: undefined
  [MainRoutes.Home]: { update: boolean } | undefined // just an example, "update" will later be used for version checks
  [MainRoutes.ConfirmEmail]: undefined
  [MainRoutes.OTP]: undefined
  [MainRoutes.ResetPassword]: resetParams
  [MainRoutes.Confirmation]: undefined
  [MainRoutes.Profile]: undefined
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
