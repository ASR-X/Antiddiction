import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
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
  SignInActionError,
  SignInButton,
  SignInFooter,
  SignInHeader,
  SignInTextFooter,
  SignInTextHeader,
  SignInTextSign,
  SignInView,
  StyledFormArea,
  ForgetPassword,
  ErrorMsg,
} from '../Components/styles'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

//Redux
import { useReduxDispatch, useReduxSelector } from '../Redux'
import { login, resetPass, selectUser, sendReset } from '../Redux/slices/user'

// Colors
const { primary, white, black, grey, greyLight } = Colors

//Gradient
import { LinearGradient } from 'expo-linear-gradient'

//Animations
import * as Animatable from 'react-native-animatable'
import { alignSelf } from 'styled-system'

//Screen Dimensions
const { height } = Dimensions.get('screen')
const height_logo = height * 0.18

const SignIn = ({ route, navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  const [hidePassword, setHidePassword] = useState(true)
  const reduxUser = useReduxSelector(selectUser)

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    bday: '',
    fullName: '',
    check_email: false, //For green animation
    check_name: false, //For green animation
    secureTextEntry: true,
    confirmSecureTextEntry: true,
    isValidEmail: true,
    isValidName: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  })

  //Handlers

  const onEmailChangeHandler = (val) => {
    if (val.length >= 6 && val.includes('@') && val.includes('.')) {
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

  const onPasswordChangeHandler = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      })
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      })
    }
  }

  const onConfirmPasswordChangeHandler = (val) => {
    if (val.trim() === data.password) {
      setData({
        ...data,
        confirmPassword: val,
        isValidConfirmPassword: true,
      })
    } else {
      setData({
        ...data,
        confirmPassword: val,
        isValidConfirmPassword: false,
      })
    }
  }

  const onNameChangeHandler = (val) => {
    if (val.trim().length > 1 && val.includes(' ')) {
      setData({
        ...data,
        fullName: val,
        check_name: true,
        isValidName: true,
      })
    } else {
      setData({
        ...data,
        fullName: val,
        check_name: false,
        isValidName: false,
      })
    }
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  }

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry,
    })
  }

  const onSubmitHandler = async () => {
    let resultAction = await dispatch(
      resetPass({ code: route.params.oobCode, password: data.password })
    )
    if (resetPass.fulfilled.match(resultAction)) {
      let loginAction = await dispatch(
        login({ email: reduxUser.email, password: data.password })
      )
    }
  }
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainerFullScreen>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Animatable.Image
            style={styles.logo}
            source={require('../Assets/delta.png')}
            resizeMode="cover"
            animation="bounceIn"
            duration={1500}
          />
          <Animatable.View animation="fadeInLeft" duration={500}>
            <SignInTextHeader>Step 2:</SignInTextHeader>
            <Text style={styles.text_headerDetail}>Choose New Password</Text>
          </Animatable.View>
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <StyledFormArea>
            <SignInTextFooter style={{ marginTop: 0 }}>
              New Password
            </SignInTextFooter>
            <SignInAction>
              <FontAwesome name="lock" color={black} size={20} />
              <TextInput
                style={styles.textInput}
                placeholder="* * * * * * * * *"
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={(val) => onPasswordChangeHandler(val)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color={grey} size={20} />
                ) : (
                  <Feather name="eye" color={grey} size={20} />
                )}
              </TouchableOpacity>
            </SignInAction>
            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <ErrorMsg>
                  Password must be at least 8 characters long.
                </ErrorMsg>
              </Animatable.View>
            )}

            <SignInTextFooter style={{ marginTop: 25 }}>
              Confirm Password
            </SignInTextFooter>
            <SignInAction>
              <FontAwesome name="lock" color={black} size={20} />
              <TextInput
                style={styles.textInput}
                placeholder="* * * * * * * * *"
                autoCapitalize="none"
                secureTextEntry={data.confirmSecureTextEntry ? true : false}
                onChangeText={(val) => onConfirmPasswordChangeHandler(val)}
              />
              <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                {data.confirmSecureTextEntry ? (
                  <Feather name="eye-off" color={grey} size={20} />
                ) : (
                  <Feather name="eye" color={grey} size={20} />
                )}
              </TouchableOpacity>
            </SignInAction>
            {data.isValidConfirmPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <ErrorMsg>Must match password.</ErrorMsg>
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
