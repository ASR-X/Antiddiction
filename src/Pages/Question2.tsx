import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'

import { MainRoutes } from '../Navigators/routes'
import {
  Colors,
  SplashButtonView,
  SplashFooter,
  QuestionHeaderView,
  QuestionNextButton,
  QuestionPrevButton,
  SplashLogo,
  QuestionTitle,
  QuestionText,
  SplashTextSign,
  StyledButton,
} from '../Components/styles'

import * as Animatable from 'react-native-animatable'
import { MultipleChoice } from '../Components/MultipleChoice'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { justifyContent } from 'styled-system'
import userSlice, { selectUser } from '../Redux/slices/user'
import { useReduxSelector } from '../Redux'

const { primary, white, grey, black } = Colors

export const Question2 = ({ navigation }): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)

  const answers = [
    {
      id: '1',
      title: 'Male',
    },
    {
      id: '2',
      title: 'Female',
    },
    {
      id: '3',
      title: 'Non-Binary',
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <StatusBar barStyle="light-content" />
      <QuestionHeaderView />
      <Animatable.View style={styles.footer}>
        <QuestionTitle>Gender</QuestionTitle>
        <MultipleChoice props={answers} num={'gender'} />
        <QuestionNextButton
          onPress={() => {
            if (reduxUser.gender) navigation.navigate(MainRoutes.Question3)
          }}
        >
          <MaterialIcons name="navigate-next" color={white} size={45} />
        </QuestionNextButton>
        <QuestionPrevButton
          onPress={() => {
            navigation.navigate(MainRoutes.Question1)
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
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
})
