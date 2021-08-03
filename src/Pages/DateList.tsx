import React from 'react'

import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'
import { BezierGraph } from '../Components/BezierGraph'
import { ProgressRings } from '../Components/ProgressRings'
import { ChonseSelect } from 'react-native-chonse-select'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

//Data
import RecentlyViewed from '../Data/RecentlyViewed'
const data = [
  {
    value: '0',
    label: '1 M',
  },
  {
    value: '1',
    label: '3 M',
  },
  {
    value: '2',
    label: '1 Y',
  },
]
//Components
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native'

import {
  Colors,
  StyledHeader,
  ProfilePicture,
  TextWrapper,
  CategoryContainer,
  CategoryIcon,
  CategoryButton,
  CategoryButtonText,
  CardImage,
  CardInfo,
  CardWrapper,
  CardImageWrapper,
  CardTitle,
  CardDetails,
} from '../Components/styles'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit'
//Slider
import VerticalSwiper from '../Components/VerticalSwiper'

// Colors
const { primary, white, grey, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { width } from 'styled-system'

const DateList = ({ navigation }): React.ReactElement => {
  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: white,
          alignContent: 'center',
          marginTop: 10,
        }}
        
      >
      <Calendar
          width={Dimensions.get('window').width - 80}
          // Specify style for calendar container element. Default = {}
          style={{
            borderWidth: 2,
            borderRadius: 15,
            borderColor: 'blue',
            height: 340,
            marginTop: 30,
            marginLeft: 15,
            marginRight: 15,

            
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            textDayFontSize: 14,
            textMonthFontSize: 14,
            textDayHeaderFontSize: 14,
          }}
        />  
        
      </SafeAreaView>
    </View>
  )
}

export default DateList
