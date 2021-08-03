import { createStackNavigator } from '@react-navigation/stack'

export enum MainRoutes {
  Home = 'Home',
  NavBar = 'NavBar',
  Plus = 'Plus',
}

export type MainStackParamList = {
  [MainRoutes.Home]: { Home: boolean } | undefined // just an example, "update" will later be used for version checks
  [MainRoutes.NavBar]: undefined
  [MainRoutes.Plus]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()
