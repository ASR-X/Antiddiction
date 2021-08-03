import React from 'react'

import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'
import { BezierGraph } from '../Components/BezierGraph'
import { ProgressRings } from '../Components/ProgressRings'
import CalendarHeatmap from 'react-native-calendar-heatmap'
//Data
import RecentlyViewed from '../Data/RecentlyViewed'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
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
import { maxWidth } from 'styled-system'

const Analytics = ({ navigation }): React.ReactElement => {
  const renderItem = ({ item }) => {
    return (
      <CardView
        itemData={item}
        onPress={() =>
          navigation.navigate(MainRoutes.CardItemDetails, { itemData: item })
        }
      />
    )
  }

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
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            padding: 15,
            alignSelf: 'flex-start',
          }}
        >
          Risk Analysis
        </Text>
        <BezierGraph
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            padding: 15,
            alignSelf: 'flex-start',
          }}
        >
          Calendar
        </Text>
        <CalendarList
          // Enable horizontal scrolling, default = false
          horizontal={true}
          // Enable paging on horizontal, default = false
          pagingEnabled={true}
          // Set custom calendarWidth.
          calendarWidth={Dimensions.get('window').width}
        />
                
                
      </SafeAreaView>
    </View>
  )
}

export default Analytics
