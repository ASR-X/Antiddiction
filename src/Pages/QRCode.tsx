import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { MainRoutes } from '../Navigators/routes'
//Redux
import { useReduxDispatch } from '../Redux'

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
import { Image } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

// Colors
const { greyLight, white, grey, primary, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'

// const QRCode = ({ navigation }): React.ReactElement => {
//   const dispatch = useReduxDispatch()
//   return (
//     <View style={{ backgroundColor: white, flex: 1 }}>
//       {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Image
//           source={require('../Assets/QRcode.png')}
//           style={{ height: 350, width: 350 }}
//         />
//         <Text
//           style={{
//             fontSize: 18,
//             fontWeight: 'bold',
//             padding: 15,
//           }}
//         >
//           Scan with Companion Therapist App
//         </Text>
//       </View> */}
//     </View>
//   )}