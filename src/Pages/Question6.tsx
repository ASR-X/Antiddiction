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
import { MultipleChoice } from '../Components/MultipleChoice'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { justifyContent } from 'styled-system'
import userSlice, { selectUser } from '../Redux/slices/user'
import { useReduxSelector } from '../Redux'

const { primary, white, grey, black } = Colors

export const Question6 = ({ navigation }): React.ReactElement => {
    const reduxUser = useReduxSelector(selectUser)
  const answers = [
    {
      id: '1',
      title: 'Private insurance (Blue Cross/Blue Shield)',
    },
    {
      id: '2',
      title: 'Medicaid',
    },
    {
      id: '3',
      title: 'Medicare or Other',
    },
    {
        id: '4',
        title: 'None',
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <StatusBar barStyle="light-content" />
      <QuestionHeaderView />
      <Animatable.View style={styles.footer} >
        <QuestionTitle>Health Insurance</QuestionTitle>
        <MultipleChoice props={answers} num={'insurance'} />
        <QuestionNextButton
          onPress={() => {
            if (reduxUser.insurance) navigation.navigate(MainRoutes.Question7)
          }
        }
        >
          <MaterialIcons name="navigate-next" color={white} size={45} />
        </QuestionNextButton>
        <QuestionPrevButton
          onPress={() => {
            navigation.navigate(MainRoutes.Question5)
          }
        }>
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
