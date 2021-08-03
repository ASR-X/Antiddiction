import React, { useState } from 'react'
import NavBar from '../Pages/NavBar'

const HomeNavigator = (): React.ReactElement => {
  return <NavBar />
}

const MainNavigator = (): React.ReactElement => {
  // if (!reduxUser.Home) return <SurveyNavigator />
  // else return <HomeNavigator />
  return <HomeNavigator />
}

const MainNavigation = (): React.ReactElement => {
  return <MainNavigator />
}

export default MainNavigation
