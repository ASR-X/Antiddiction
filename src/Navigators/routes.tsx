import { createStackNavigator } from '@react-navigation/stack'
import CardItemDetails from '../Pages/CardItemDetail'
import { resetParams } from './MainNavigation'

export enum MainRoutes {
  SplashScreen = 'Splash Screen',
  Question1 = 'Question 1',
  Question2 = 'Question 2',
  Question3 = 'Question 3',
  Question4 = 'Question 4',
  Question5 = 'Question 5',
  Question6 = 'Question 6',
  Question7 = 'Question 7',
  Question8 = 'Question 8',
  Question9 = 'Question 9',
  Home = 'Home',
  NavBar = 'NavBar',
  Calendar = 'Calendar',
  Analytics = 'Analytics',
  Connect = 'Connect',
  QRCode = 'qr code',
}

export type MainStackParamList = {
  [MainRoutes.SplashScreen]: undefined
  [MainRoutes.Home]: { update: boolean } | undefined // just an example, "update" will later be used for version checks
  [MainRoutes.Question1]: undefined
  [MainRoutes.Question2]: undefined
  [MainRoutes.Question3]: undefined
  [MainRoutes.Question4]: undefined
  [MainRoutes.Question5]: undefined
  [MainRoutes.Question6]: undefined
  [MainRoutes.Question7]: undefined
  [MainRoutes.Question8]: undefined
  [MainRoutes.Question9]: undefined
  [MainRoutes.NavBar]: undefined
  [MainRoutes.QRCode]: undefined
  [MainRoutes.Calendar]: undefined
  [MainRoutes.Analytics]: undefined
  [MainRoutes.Connect]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()
