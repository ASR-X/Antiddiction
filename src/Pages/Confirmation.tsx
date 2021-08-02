import React from 'react'

//Animations
import * as Animatable from 'react-native-animatable'

import { StatusBar, Dimensions, StyleSheet, Platform } from 'react-native'
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  SignInButton,
  SignInTextSign,
  Colors,
} from '../Components/styles'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

// Colors
const { grey, white, primary, black } = Colors

//Screen Dimensions
const { height } = Dimensions.get('screen')
const height_logo = height * 0.2

//Gradient
import { LinearGradient } from 'expo-linear-gradient'
import { MainRoutes } from '../Navigators/routes'

const Confirmation = ({ navigation }): React.ReactElement => {
  const onSubmitHandler = () => {
    navigation.navigate(MainRoutes.NavBar)
  }
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer style={{ backgroundColor: primary, flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <InnerContainer style={{ marginTop: 20 }}>
          <PageTitle style={{ fontSize: 40 }}>Password Updated</PageTitle>
          <Animatable.Image
            style={{
              marginTop: 20,
              width: height_logo,
              height: height_logo,
              tintColor: black,
            }}
            resizeMode="contain"
            source={require('../Assets/checkMark.png')}
          />
          <SubTitle
            style={{
              fontSize: 12,
              textAlign: 'center',
              marginTop: 30,
              color: white,
            }}
          >
            Your password has been updated scucessfully! Don't forget it this
            time.
          </SubTitle>

          <SignInButton onPress={onSubmitHandler}>
            <LinearGradient colors={[black, black]} style={styles.signIn}>
              <SignInTextSign style={{ color: white }}>Next</SignInTextSign>
            </LinearGradient>
          </SignInButton>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}

export default Confirmation

const styles = StyleSheet.create({
  text_headerDetail: {
    color: white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    alignSelf: 'center',
    tintColor: white,
  },

  container: {
    flex: 1,
    backgroundColor: '#FF6347',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 2 : 3,
    backgroundColor: white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: white,
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: black,
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: grey,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: black,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: grey,
  },
})
