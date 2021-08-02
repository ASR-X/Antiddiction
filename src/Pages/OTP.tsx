import React, { useState } from 'react'
import { StatusBar } from 'react-native'

import OTPInputView from '@twotalltotems/react-native-otp-input'
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Colors,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from '../Components/styles'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

// Colors
const { primary, black } = Colors

const OTP = ({ navigation }): React.ReactElement => {
  const [otp, setOTP] = useState('')

  const onChangeOTPHandler = (value) => {
    setOTP(value)
    console.log(otp)
  }

  const resendOTPHandler = () => {}

  const onSubmitHandler = () => {
    navigation.navigate('ResetPassword')
  }
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar />
        <InnerContainer>
          <PageLogo
            resizeMode="contain"
            source={require('../Assets/code.png')}
          />
          <PageTitle>Verification</PageTitle>
          <ExtraView>
            <ExtraText
              style={{ fontSize: 12, paddingLeft: 30, paddingRight: 30 }}
            >
              Enterd One Time Password sent to greendog@gmail.com
            </ExtraText>
          </ExtraView>
          <OTPInputView
            pinCount={6}
            style={{ width: '80%', height: 100 }}
            autoFocusOnLoad
            codeInputFieldStyle={{
              borderColor: '#7d7d7d',
              color: '#000000',
              backgroundColor: '#f0f0f0',
            }}
            codeInputHighlightStyle={{
              borderColor: '#e01458',
              color: '#000000',
              backgroundColor: '#f0f0f0',
            }}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`)
            }}
          />
          <ExtraView>
            <ExtraText style={{ fontSize: 12 }}>Didn't Recieve Code?</ExtraText>
            <TextLink onPress={resendOTPHandler}>
              <TextLinkContent style={{ fontSize: 12 }}>
                {' '}
                Resend Code
              </TextLinkContent>
            </TextLink>
          </ExtraView>
          <StyledFormArea>
            <Line style={{ width: '89%', marginLeft: 18 }} />
            <StyledButton
              style={{ marginLeft: 18, width: '90%' }}
              onPress={onSubmitHandler}
            >
              <ButtonText>Next</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}

export default OTP
