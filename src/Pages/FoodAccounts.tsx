import React, { useState } from 'react'

//Routes
import { MainRoutes } from '../Navigators/routes'

import {
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native'

//Components
import {
  Colors,
  StyledContainerFullScreen,
  SignInAction,
  SignInActionError,
  SignInFooter,
  SignInHeader,
  SignInTextFooter,
  SignInTextHeader,
  SignInTextSign,
  SignInView,
  StyledFormArea,
  ErrorMsg,
} from '../Components/styles'

// icons
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

//Redux
import { useReduxDispatch } from '../Redux'
import { signup } from '../Redux/slices/user'

// Colors
const { primary, white, black, grey, red } = Colors

//Gradient
import { LinearGradient } from 'expo-linear-gradient'

//Animations
import * as Animatable from 'react-native-animatable'

const FoodAccounts = ({ navigation }): React.ReactElement => {
  const [hidePassword, setHidePassword] = useState(true)
  const dispatch = useReduxDispatch()

  const [data, setData] = useState({
    syscoEmail: '',
    syscoPassword: '',
    usFoodsPassword: '',
    usFoodID: '',
    check_email: false, //For green animation
    check_name: false, //For green animation
    secureTextEntry: true,
    confirmSecureTextEntry: true,
    isValidEmail: true,
    isValidID: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  })

  //Handlers

  const onEmailChangeHandler = (val) => {
    if (val.length >= 6 && val.includes('@') && val.includes('.')) {
      setData({
        ...data,
        syscoEmail: val,
        check_email: true,
        isValidEmail: true,
      })
    } else {
      setData({
        ...data,
        syscoEmail: val,
        check_email: false,
        isValidEmail: false,
      })
    }
  }

  const onSyscoPasswordChangeHandler = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        syscoPassword: val,
        isValidPassword: true,
      })
    } else {
      setData({
        ...data,
        syscoPassword: val,
        isValidPassword: false,
      })
    }
  }

  const onUSFoodsPasswordChangeHandler = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        usFoodsPassword: val,
        isValidConfirmPassword: true,
      })
    } else {
      setData({
        ...data,
        usFoodsPassword: val,
        isValidConfirmPassword: false,
      })
    }
  }

  const onIDChangeHandler = (val) => {
    if (val.trim().length > 1 && val.includes(' ')) {
      setData({
        ...data,
        usFoodID: val,
        check_name: true,
        isValidID: true,
      })
    } else {
      setData({
        ...data,
        usFoodID: val,
        check_name: false,
        isValidID: false,
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
    //Need some changes here big man
  }

  //Components
  const RegisterButton = () => {
    return (
      <TouchableOpacity
        onPress={onSubmitHandler}
        style={[styles.signIn, { marginTop: 30 }]}
      >
        <LinearGradient colors={['#FFA07A', '#FF6347']} style={styles.signIn}>
          <SignInTextSign>Register</SignInTextSign>
        </LinearGradient>
      </TouchableOpacity>
    )
  }

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainerFullScreen>
        <StatusBar barStyle="light-content" />
        <SignInHeader>
          <SignInTextHeader>Account Authentication</SignInTextHeader>
        </SignInHeader>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <StyledFormArea>
            <View style={[styles.textPrivate, { marginTop: -2 }]}>
              <Text style={styles.color_textPrivate}>
                To provide our price comparison service, we need to be able
                access your
                <Text
                  style={[styles.color_textPrivate, { fontWeight: 'bold' }]}
                >
                  {' '}
                  Sysco{' '}
                </Text>
                and
                <Text
                  style={[styles.color_textPrivate, { fontWeight: 'bold' }]}
                >
                  {' '}
                  US Food
                </Text>{' '}
                account. For more information, refer to our
                <Text
                  style={[styles.color_textPrivate, { fontWeight: 'bold' }]}
                >
                  {' '}
                  Privacy Policy
                </Text>
                .
              </Text>
            </View>

            <SignInTextFooter style={{ marginTop: 20 }}>
              Sysco Email
            </SignInTextFooter>
            <SignInAction>
              <FontAwesome name="envelope-o" color={black} size={20} />
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
                <ErrorMsg>Must be a Valid Email</ErrorMsg>
              </Animatable.View>
            )}

            <SignInTextFooter style={{ marginTop: 20 }}>
              Sysco Password
            </SignInTextFooter>
            <SignInAction>
              <FontAwesome name="lock" color={black} size={20} />
              <TextInput
                style={styles.textInput}
                placeholder="* * * * * * * * *"
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={(val) => onSyscoPasswordChangeHandler(val)}
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

            <SignInTextFooter style={{ marginTop: 20 }}>
              US Foods ID
            </SignInTextFooter>
            <SignInAction>
              <FontAwesome name="user-o" color={black} size={20} />
              <TextInput
                style={styles.textInput}
                placeholder="Full Name"
                onChangeText={(val) => onIDChangeHandler(val)}
              />
              {data.isValidID ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </SignInAction>
            {data.isValidID ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <ErrorMsg>Must be a Valid ID</ErrorMsg>
              </Animatable.View>
            )}

            <SignInTextFooter style={{ marginTop: 20 }}>
              US Foods Password
            </SignInTextFooter>
            <SignInAction>
              <FontAwesome name="lock" color={black} size={20} />
              <TextInput
                style={styles.textInput}
                placeholder="* * * * * * * * *"
                autoCapitalize="none"
                secureTextEntry={data.confirmSecureTextEntry ? true : false}
                onChangeText={(val) => onUSFoodsPasswordChangeHandler(val)}
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
                <ErrorMsg>Password Must be 8 characters long.</ErrorMsg>
              </Animatable.View>
            )}

            <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>
                By signing up you agree to our
              </Text>
              <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
                {' '}
                Terms of service
              </Text>
              <Text style={styles.color_textPrivate}> and</Text>
              <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
                Privacy policy
              </Text>
            </View>

            <RegisterButton />
          </StyledFormArea>
        </Animatable.View>
      </StyledContainerFullScreen>
    </KeyboardAvoidingWrapper>
  )
}

export default FoodAccounts

const styles = StyleSheet.create({
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
    flex: Platform.OS === 'ios' ? 3 : 5,
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
