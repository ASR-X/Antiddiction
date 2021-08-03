import { createStackNavigator } from '@react-navigation/stack'

export enum MainRoutes {
  Home = 'Home',
  NavBar = 'NavBar',
}

export type MainStackParamList = {
  [MainRoutes.Home]: { update: boolean } | undefined // just an example, "update" will later be used for version checks
  [MainRoutes.NavBar]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()
