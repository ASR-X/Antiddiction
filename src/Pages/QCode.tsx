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

const Search = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  return (
    <SafeAreaView style={{ backgroundColor: white, flex: 1 }}>
      <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            padding: 15,
            alignSelf: 'flex-start',
          }}
        >
          Scan with Companion App
        </Text>
        {/* <Image
          src={require('../Assets/QRcode.png')} 
          style={{ height: "70px", paddingRight: "10px" }} 
        />  */}
      
        
    </SafeAreaView>
  )
}

export default Search
