import React, { useRef } from 'react'
import { SafeAreaView, Text, View, ImageBackground } from 'react-native'
import { MainRoutes } from '../Navigators/routes'

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
  Action,
  EditProfileTextInput,
  CommandButton,
  PanelButtonTitle,
  EditProfileHeader,
  PanelHeader,
  PanelHandle,
  Panel,
  PanelTitle,
  PanelSubtitle,
  PanelButton,
} from '../Components/styles'
import { TouchableOpacity } from 'react-native'

// Colors
const { greyLight, white, grey, primary, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const EditProfile = ({ navigation }): React.ReactElement => {
  return (
    <SafeAreaView style={{ backgroundColor: white, flex: 1 }}>
      <View
        style={{
          margin: 20,
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ImageBackground
              source={require('../Assets/mockPFP.jpg')}
              style={{ height: 100, width: 100 }}
              imageStyle={{ borderRadius: 15 }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              ></View>
            </ImageBackground>
          </View>

          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
            Bob Smith
          </Text>
        </View>
        <StyledTextInput
          icon="user-o"
          placeholder="First Name"
          keybaordType="default"
        />
        <StyledTextInput
          icon="user-o"
          placeholder="Last Name"
          keybaordType="default"
        />
        <StyledTextInput
          icon="phone"
          placeholder="Phone"
          keybaordType="phone-pad"
        />
        <StyledTextInput
          icon="envelope-o"
          placeholder="Email"
          keybaordType="email-address"
        />
        <StyledTextInput
          icon="globe"
          placeholder="Country"
          keybaordType="default"
        />
        <StyledTextInput
          icon="map-marker"
          placeholder="City"
          keybaordType="default"
        />
      </View>
      <CommandButton onPress={() => {}}>
        <PanelButtonTitle>Submit</PanelButtonTitle>
      </CommandButton>
    </SafeAreaView>
  )
}

const SearchIcon = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Ionicons name={'search'} size={30} color={greyLight} />
    </TouchableOpacity>
  )
}

const StyledTextInput = ({ icon, placeholder, keybaordType }) => {
  return (
    <Action>
      <FontAwesome name={icon} size={20} />
      <EditProfileTextInput
        placeholder={placeholder}
        placeholderTextColor={grey}
        autoCorrect={false}
        keyboardType={keybaordType}
        onChange={() => {}}
      />
    </Action>
  )
}

export default EditProfile
