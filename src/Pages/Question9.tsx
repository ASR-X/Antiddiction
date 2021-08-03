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
import { useReduxDispatch, useReduxSelector } from '../Redux'
import { MultipleChoice } from '../Components/MultipleChoice'
import { CalendarChoice } from '../Components/CalendarChoice'

const { primary, white, grey, black } = Colors

export const Question9 = ({ navigation }): React.ReactElement => {
    const reduxUser = useReduxSelector(selectUser)
  const answers = [
    {
      id: 1,
    }
  ]

  const dispatch = useReduxDispatch()

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <StatusBar barStyle="light-content" />
      <QuestionHeaderView />
      <Animatable.View style={styles.footer} >
        <QuestionTitle>Dose History</QuestionTitle>
        <CalendarChoice props={answers} num={'dose'} />
        <QuestionNextButton
          onPress={() => {
            console.log(reduxUser)
            if (reduxUser.dose.length > 0) dispatch(
                userSlice.actions.setFactor({ Home: true })
              )
          }
        }
        >
          <MaterialIcons name="navigate-next" color={white} size={45} />
        </QuestionNextButton>
        <QuestionPrevButton
          onPress={() => {
            navigation.navigate(MainRoutes.Question8)
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
    paddingTop: 52,
    paddingHorizontal: 20,
    paddingBottom: 100
  },
})
