import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { MainRoutes } from '../Navigators/routes'
//Redux
import { useReduxDispatch } from '../Redux'
import { logout } from '../Redux/slices/user'

//Components
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
import { TouchableOpacity } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

// Colors
const { greyLight, white, grey, primary, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'

const Profile = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  return (
    <SafeAreaView style={{ backgroundColor: white, flex: 1 }}>
      <UserInfoSection>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar
            source={require('../Assets/mockPFP.jpg')}
            resizeMode="cover"
          />
          <View style={{ marginLeft: 15 }}>
            <StyledTitle style={{ marginTop: 15, marginBottom: 5 }}>
              Bob Smith
            </StyledTitle>
            <Caption>@Deez_Nuts</Caption>
          </View>
        </View>
      </UserInfoSection>
      <UserInfoSection>
        <Row>
          <Ionicons name="mail-outline" size={15} color={grey} />
          <Text style={{ marginLeft: 15, fontSize: 12, color: grey }}>
            greendog21@gmail.com
          </Text>
        </Row>
        <Row>
          <Ionicons name="calendar-outline" size={15} color={grey} />
          <Text style={{ marginLeft: 15, fontSize: 12, color: grey }}>
            August 30, 1969
          </Text>
        </Row>
        <Row>
          <Ionicons name="navigate-outline" size={15} color={grey} />
          <Text style={{ marginLeft: 15, fontSize: 12, color: grey }}>
            Dallas, Texas
          </Text>
        </Row>
      </UserInfoSection>
      <InfoBoxWrapper>
        <InfoBox style={{ borderRightColor: greyLight, borderRightWidth: 1 }}>
          <StyledTitle>140$</StyledTitle>
          <Caption>Wallet</Caption>
        </InfoBox>
        <InfoBox>
          <StyledTitle>12</StyledTitle>
          <Caption>Orders</Caption>
        </InfoBox>
      </InfoBoxWrapper>
      <MenuWrapper>
        <TouchableRipple onPress={() => {}}>
          <MenuItem>
            <Ionicons name="card-outline" size={25} color={primary} />
            <MenuItemText>Payment</MenuItemText>
          </MenuItem>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <MenuItem>
            <Ionicons name="information-circle" size={25} color={primary} />
            <MenuItemText>About</MenuItemText>
          </MenuItem>
        </TouchableRipple>
      </MenuWrapper>
    </SafeAreaView>
  )
}

export default Profile
