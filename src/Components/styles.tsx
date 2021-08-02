import styled from 'styled-components'
import Constants from 'expo-constants'

import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native'

// Getting Status Bar Height
const StatusBarHeight = Constants.statusBarHeight

//Screen Dimensions
const { height } = Dimensions.get('screen')
const height_logo = height * 0.28

// colors
export const Colors = {
  white: '#ffffff',
  primary: '#FF6347',
  secondary: '#f36b69',
  highlight: '#f6c949',
  red: '#EF4444',
  black: '#000000',
  grey: '#999',
  orangeLight: '#fdeae7',
  greyLight: '#dddddd',
  greyDark: '#2a2a2a',
}

const {
  white,
  primary,
  secondary,
  highlight,
  grey,
  red,
  black,
  orangeLight,
  greyLight,
  greyDark,
} = Colors

//Containers
export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${white};
`

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  align-content: center;
`

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
  align-content: center;
`

export const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const UserInfoSection = styled.View`
  padding-horizontal: 30px;
  margin-bottom: 25px;
`
export const InfoBoxWrapper = styled.View`
  border-bottom-color: ${greyLight};
  border-bottom-width: 1px;
  border-top-color: ${greyLight};
  border-top-width: 1px;
  flex-direction: row;
  height: 100px;
`
export const InfoBox = styled.View`
  width: 50%;
  align-items: center;
  justify-content: center;
`

export const MenuWrapper = styled.View`
  margin-top: 10px;
`

export const MenuItem = styled.View`
  flex-direction: row;
  padding-vertical: 15px;
  padding-horizontal: 30px;
`

export const MenuItemText = styled.Text`
  color: #777777;
  margin-left: 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
`
export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`

//Slider Stuff

export const SliderContainer = styled.View`
  height: 200px;
  width: 90%;
  margin-top: 10px;
  justify-content: center;
  align-self: center;
  border-radius: 8px;
`
export const Slide = styled.View`
  height: 100%;
  width: 100%;
  align-self: center;
  border-radius: 8px;
`
export const SliderImage = styled.Image`
  height: 100%;
  width: 100%;
  align-self: center;
  border-radius: 8px;
`

//Category Stuff

export const CategoryContainer = styled.View`
  flex-direction: row;
  width: 90%;
  align-self: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 10px;
`
export const CategoryButton = styled.TouchableOpacity`
  flex: 1;
  width: 30%;
  margin-horizontal: 20px;
  align-self: center;
`

export const CategoryIcon = styled.View`
  border-width: 0px;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 70px;
  height: 70px;
  background-color: ${orangeLight};
  border-radius: 50px;
`

export const CategoryButtonText = styled.Text`
  align-self: center;
  margin-top: 5px;
  color: #de4f35;
`

//Card Stuff

export const Card = styled.View`
  height: 100px;
  margin-vertical: 10px;
  flex-direction: row;
  shadow-color: ${grey};
  shadow-offset: {width: 0, height: 1}
  shadow-opacity 0.8;
  shadow-radius: 2px;
  elevation: 5;
`

export const CardWrapper = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  align-self: center;
`
export const CardImage = styled.Image`
  height: 100%
  width: 100%;
  align-self: center;
  border-radius: 8px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
`

export const CardImageWrapper = styled.View`
  flex: 1;
`

export const CardInfo = styled.View`
  flex: 2;
  padding: 10px;
  border-left-width: 0px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${white};
`
export const CardTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
`

export const CardDetails = styled.Text`
  font-size: 10px;
  color: ${grey};
`
export const CardDetailsDark = styled.Text`
  font-size: 10px;
  color: ${greyDark};
`

//Image Stuff

export const Avatar = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${black};
`

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${black};
`

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`

export const PageLogo = styled.Image`
  width: 200px;
  height: 150px;
`

//Text Stuff

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${white};
  padding: 10px;

  ${(props) =>
    props.welcome &&
    `
    font-size:35px;
  `}
`
export const WelcomeTitle = styled.Text`
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: ${white};
  padding: 10px;
`

export const StyledTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${black};
`

export const Caption = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  color: ${grey};
`

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${black};

  ${(props) =>
    props.welcome &&
    `
  margin-bottom: 5px;
  font-weight: normal
  `}
`

//Form Stuff

export const StyledFormArea = styled.View`
  width: 100%;
`

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${black};
`

export const StyledInputLabel = styled.Text`
  color: ${black};
  font-size: 13px;
  text-align: left;
`

export const LeftIcon = styled.View`
  left: 15px;
  top: 35px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 35px;
  position: absolute;
  z-index: 1;
`

//Button Stuff

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${primary};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
  width: 100%;

  ${(props) =>
    props.google === true &&
    `
  background-color: ${highlight};
  flex-direction: row; 
  `}
`

export const StyledTransparentButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  color: ${white};
  font-size: 16px;

  ${(props) =>
    props.google === true &&
    `
  margin-left: 10px;
  `}
`

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${greyDark};
  margin-vertical: 10px;
`

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  text-align: center;
  color: ${black};
  font-size: 15px;
`

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`

export const TextLinkContent = styled.Text`
  color: ${highlight};
  font-size: 15px;
`

export const StyledHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: 5%;
  margin-top: 5px;
`
//Edit Profile Styles

export const CommandButton = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 10px;
  background-color: ${primary};
  align-items: center;
  margin-top: 10px;
  width: 90%;
  margin-left: 5%;
`

export const Panel = styled.View`
  padding: 20px;
  background-Color: ${white};
  padding-top: 20px;
  border-color: ${black}
  border-width: 1px;
  border-Top-Left-Radius: 20px;
  border-Top-Right-Radius: 20px;
  shadow-Color: ${black};
  shadow-Radius: 5px;
  shadow-Opacity: 0.4;
`
export const EditProfileHeader = styled.View`
  background-Color: ${white}'
  shadow-Color: ${grey},
  shadow-Offset: {width: -1px, height: -3px};
  shadow-Radius: 2px;
  shadow-Opacity: 0.4;
  elevation: 5;
  padding-Top: 20px
  border-Top-Left-Radius: 20px;
  border-Top-Right-Radius: 20px;
`

export const PanelHeader = styled.View`
  align-items: center;
`

export const PanelHandle = styled.View`
  width: 40px;
  height: 8px;
  border-radius: 4px;
  background-color: #00000040;
  margin-bottom: 10px;
`
export const PanelTitle = styled.Text`
  font-size: 27px;
  height: 35px;
`

export const PanelSubtitle = styled.Text`
  font-size: 14px;
  height: 35px;
  border-radius: 4px;
  color: ${grey};
  margin-bottom: 10px;
`

export const PanelButton = styled.TouchableOpacity`
  padding: 13px;
  border-radius: 10px;
  background-color: ${primary};
  align-items: center;
  margin-vertical: 7px;
`
export const PanelButtonTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${white};
`
export const Action = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${greyLight};
  padding-bottom: 5px;
`
export const actionError = styled.View` 
  flex-Direction: row;
  margin-Top: 10px,
  border-Bottom-Width: 1px;
  border-Bottom-Color: #FF0000;
  padding-Bottom: 5px;
`
export const EditProfileTextInput = styled.TextInput`
  flex: 1px;
  padding-left: 10px;
  color: ${black};
`

//Splash Screen Stuff

export const SplashHeaderView = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`

export const SplashFooter = styled.View`
  flex: 1;
  background-color: ${white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-vertical: 50px;
  padding-horizontal: 30px;
`

export const SplashLogo = styled.Image`
  width: ${height_logo}px;
  height: ${height_logo}px;
`

export const SplashTitle = styled.Text`
  color: ${red};
  font-size: 30px;
  font-weight: bold;
`
export const SplashText = styled.Text`
  color: ${grey};
  margin-top: 5px;
`
export const SplashButtonView = styled.View`
  align-items: flex-end;
  margin-top: 30px;
`

export const SplashSignIn = styled.View`
  width: 150px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  flex-direction: row;
`
export const SplashTextSign = styled.Text`
  color: ${white};
  font-weight: bold;
`

//Sign In Stuff

export const StyledContainerFullScreen = styled.View`
  flex: 1;
  background-color: ${primary};
`
export const SignInHeader = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-horizontal: 20px;
  padding-bottom: 50px;
`
export const SignInFooter = styled.View`
  flex: 3;
  background-color: ${white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-horizontal: 20px;
  padding-vertical: 30px;
`
export const SignInTextHeader = styled.Text`
  color: ${white};
  font-weight: bold;
  font-size: 30px;
`
export const SignInTextFooter = styled.Text`
  color: ${black};
  font-size: 18px;
`
export const SignInAction = styled.View`
  flex-direction: row;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  padding-bottom: 5px;
  margin-bottom: 10px;
`
export const SignInActionError = styled.View`
  flex-direction: row;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ff0000;
  padding-bottom: 5px;
`
export const ErrorMsg = styled.Text`
  color: ${red};
  font-size: 12px;
`
export const SignInButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: 50px;
`

export const SignInView = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
export const SignInTextSign = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${white};
`

export const ForgetPassword = styled.TouchableOpacity`
  margin-top: 15px;
`

// US Food and Sysco Components

export const CompanyTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${black};
`

export const HorizontalScroll = styled.View`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
  justify-content: flex-start;
`
export const SearchBarContainer = styled.View`
  background-color: ${greyLight};
  border-radius: 20px;
  margin-top: 5px;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  flex-direction: row;
`
export const CompanySlogan = styled.Text`
  font-size: 14px;
  font-weight: 300;
`
export const CategoryTitle = styled.Text`
  font-size: 10px;
  font-weight: bold;
  padding: 5px;
  padding-bottom: 10px;
`

export const FoodButton = styled.TouchableOpacity`
  margin-horizontal: 15px;
  align-items: center;
`

export const SearchText = styled.Text`
  color: ${greyDark}
  font-weight: 300;
  margin-horizontal: 10px;
`
export const SearchContainer = styled.View`
  background-color: ${greyLight};
  border-radius: 20px;
  margin-top: 5px;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  flex-direction: row;
`
export const SearchButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 80%;
`

export const FilterContainer = styled.TouchableOpacity`
  align-items: center;
  margin-right: 10px;
`
export const CompanyLogo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-width: 1px;
`
