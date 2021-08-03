import React, { useState, useEffect } from 'react'

import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'
import { BezierGraph } from '../Components/BezierGraph'
import { ProgressRings } from '../Components/ProgressRings'
import CalendarHeatmap from 'react-native-calendar-heatmap'
//Data
import RecentlyViewed from '../Data/RecentlyViewed'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
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
import { selectUser } from '../Redux/slices/user'
import { useReduxSelector } from '../Redux'

const Analytics = ({ navigation }): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)

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
            labels: reduxUser.timestamps,
            datasets: [
              {
                data: reduxUser.probs,
              },
            ],
          }}
        />
      </SafeAreaView>
    </View>
  )
}

export default Analytics
