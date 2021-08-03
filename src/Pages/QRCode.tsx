import React, { Component } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView, Text, View } from 'react-native'
import { useReduxDispatch } from '../Redux'

//colors
import {
  Colors,
  Avatar,
  UserInfoSection,
  StyledTitle,
  Caption,
  Row,
  InfoBoxWrapper,
  InfoBox,
  CategoryButtonText,
  MenuWrapper,
  MenuItem,
  MenuItemText,
} from '../Components/styles'
const { greyLight, white, grey, primary, black } = Colors

//ICON
import Icon from 'react-native-vector-icons/FontAwesome'

const qrcode = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  return (
    <SafeAreaView style={{ backgroundColor: white, flex: 1 }}>
      <Text>QR Code</Text>
    </SafeAreaView>
  )
}
export default qrcode
