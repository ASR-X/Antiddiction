import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'

import { MainRoutes } from '../Navigators/routes'
import {
  Colors,
  SplashButtonView,
  SplashFooter,
  QuestionHeaderView,
  QuestionNextButton,
  SplashLogo,
  QuestionTitle,
  QuestionText,
  SplashTextSign,
  StyledButton,
  QuestionPrevButton,
} from '../Components/styles'

import * as Animatable from 'react-native-animatable'
import { BoxChoice } from '../Components/BoxChoice'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { justifyContent, paddingBottom } from 'styled-system'
import userSlice, { selectUser } from '../Redux/slices/user'
import { useReduxSelector } from '../Redux'

const { primary, white, grey, black } = Colors

export const Question7 = ({ navigation }): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)
  const answers = [
    {
      id: '1',
      title: 'None',
    },
    {
      id: '2',
      title: 'Alcohol',
    },
    {
      id: '3',
      title: 'Cocaine/crack',
    },
    {
      id: '4',
      title: 'Marijuana',
    },
    {
      id: '5',
      title: 'Heroin',
    },
    {
      id: '15',
      title: 'Barbiturates',
    },
    {
      id: '13',
      title: 'Benzodiazepines',
    },
    {
      id: '10',
      title: 'Methamphetamine/speed',
    },
    {
      id: '9',
      title: 'Hallucinogens',
    },
    {
      id: '17',
      title: 'Inhalants',
    },
    {
      id: '6',
      title: 'Non-prescription methadone',
    },
    {
      id: '7',
      title: 'Other opiates and synthetics',
    },
    {
      id: '8',
      title: 'PCP',
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <StatusBar barStyle="light-content" />
      <QuestionHeaderView />
      <Animatable.View style={[styles.footer]}>
        <QuestionTitle>Drugs</QuestionTitle>
        <BoxChoice props={answers} num={'drugs'} />
        <QuestionNextButton
          onPress={() => {
            if (reduxUser.drugs.length > 0)
              navigation.navigate(MainRoutes.Question8)
          }}
        >
          <MaterialIcons name="navigate-next" color={white} size={45} />
        </QuestionNextButton>
        <QuestionPrevButton
          onPress={() => {
            navigation.navigate(MainRoutes.Question6)
          }}
        >
          <MaterialIcons name="navigate-before" color={white} size={45} />
        </QuestionPrevButton>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 52,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
})
