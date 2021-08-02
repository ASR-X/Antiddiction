import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  Text,
  Dimensions,
} from 'react-native'

// icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

//Routes
import { MainRoutes } from '../Navigators/routes'

import {
  Colors,
  StyledContainerFullScreen,
  SignInAction,
  SignInButton,
  SignInTextFooter,
  SignInTextHeader,
  SignInTextSign,
  StyledFormArea,
  ErrorMsg,
} from '../Components/styles'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

//Redux
import { useReduxDispatch } from '../Redux'
import { login, sendReset } from '../Redux/slices/user'

// Colors
const { primary, white, black, grey, greyLight } = Colors

//Gradient
import { LinearGradient } from 'expo-linear-gradient'

//Animations
import * as Animatable from 'react-native-animatable'

//Screen Dimensions
const { height } = Dimensions.get('screen')
const height_logo = height * 0.2

const SignIn = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  const [hidePassword, setHidePassword] = useState(true)

  const [data, setData] = useState({
    email: '',
    check_email: false,
    isValidEmail: true,
    password: '', //temp
  })

  //Handlers

  const onEmailChangeHandler = (val) => {
    if (val.trim().length >= 6 && val.includes('@')) {
      setData({
        ...data,
        email: val,
        check_email: true,
        isValidEmail: true,
      })
    } else {
      setData({
        ...data,
        email: val,
        check_email: false,
        isValidEmail: false,
      })
    }
  }

  const onSubmitHandler = async () => {
    //Prob Not Correct but whatever
    const resultAction = await dispatch(sendReset(data.email))
  }
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainerFullScreen>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Animatable.Image
            style={[styles.logo, { marginBottom: -50 }]}
            source={require('../Assets/lock.png')}
            resizeMode="cover"
            animation="bounceIn"
            duration={1500}
          />
          <Animatable.View
            animation="fadeInLeft"
            duration={500}
            style={{ marginTop: 20 }}
          >
            <SignInTextHeader>Step 1:</SignInTextHeader>
            <Text style={styles.text_headerDetail}>Account Email</Text>
          </Animatable.View>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <StyledFormArea>
            <View style={[styles.textPrivate, { marginTop: -2 }]}>
              <Text style={styles.color_textPrivate}>
                Provide your account's email for which you want to rest your
                password. A
                <Text
                  style={[styles.color_textPrivate, { fontWeight: 'bold' }]}
                >
                  {' '}
                  Dynamic Link
                </Text>{' '}
                will be sent to your email.
              </Text>
            </View>

            <SignInTextFooter style={{ marginTop: 20 }}>Email</SignInTextFooter>
            <SignInAction>
              <FontAwesome name="user-o" color={black} size={20} />
              <TextInput
                style={styles.textInput}
                placeholder="user@provider.com"
                autoCapitalize="none"
                onChangeText={(val) => onEmailChangeHandler(val)}
                keyboardType="email-address"
              />
              {data.check_email ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </SignInAction>
            {data.isValidEmail ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <ErrorMsg>Must be a Valid Email.</ErrorMsg>
              </Animatable.View>
            )}

            <SignInButton onPress={onSubmitHandler}>
              <LinearGradient
                colors={['#FFA07A', '#FF6347']}
                style={styles.signIn}
              >
                <SignInTextSign>Next</SignInTextSign>
              </LinearGradient>
            </SignInButton>
          </StyledFormArea>
        </Animatable.View>
      </StyledContainerFullScreen>
    </KeyboardAvoidingWrapper>
  )
}

export default SignIn

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
    flex: Platform.OS === 'ios' ? 2 : 2,
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
    width: '100%',
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
