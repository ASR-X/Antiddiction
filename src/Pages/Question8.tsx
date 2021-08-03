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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { justifyContent } from 'styled-system'
import userSlice, { selectUser } from '../Redux/slices/user'
import { useReduxSelector } from '../Redux'
import { MultipleChoice } from '../Components/MultipleChoice'

const { primary, white, grey, black } = Colors

export const Question8 = ({ navigation }): React.ReactElement => {
    const reduxUser = useReduxSelector(selectUser)
  const answers = [
    {
      id: '1',
      title: 'Oral',
    },
    {
      id: '2',
      title: 'Smoking',
    },
    {
      id: '3',
      title: 'Inhalation',
    },
    {
        id: '4',
        title: 'Injection',
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <StatusBar barStyle="light-content" />
      <QuestionHeaderView />
      <Animatable.View style={styles.footer} >
        <QuestionTitle>Primary Administration Route</QuestionTitle>
        <MultipleChoice props={answers} num={'admin'} />
        <QuestionNextButton
          onPress={() => {
            if (reduxUser.admin) navigation.navigate(MainRoutes.Question9)
          }
        }
        >
          <MaterialIcons name="navigate-next" color={white} size={45} />
        </QuestionNextButton>
        <QuestionPrevButton
          onPress={() => {
            navigation.navigate(MainRoutes.Question7)
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
