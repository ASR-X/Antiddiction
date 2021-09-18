import React, { useMemo, useState } from 'react'

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

import userSlice, { selectUser, risk } from '../Redux/slices/user'
import { useReduxDispatch, useReduxSelector } from '../Redux'
// Colors
const { primary, white, grey, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { width } from 'styled-system'
import { blue100 } from 'react-native-paper/lib/typescript/styles/colors'

const DateList = ({ navigation }): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)
  const [current, setCurrent] = useState(new Date())
  const doses = useMemo(() => {
    const doses = []
    for (let i = 0; i < reduxUser.dose.length; i++) {
      doses.push(new Date(reduxUser.dose[i]))
    }
    doses.sort((a, b) => a - b)
    return doses
  }, [reduxUser.dose])

  console.log(reduxUser)

  const convertDate = useMemo(() => {
    // const offset = current.getTimezoneOffset()
    // var date = new Date(current.getTime() - (offset*60*1000))
    return current.toISOString().split('T')[0]
  }, [current])

  const today = useMemo(() => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }, [])

  const selectedDate = useMemo(() => {
    var obj = {}
    // const offset = current.getTimezoneOffset()
    // var date = new Date(current.getTime() - (offset*60*1000))
    var string = current.toISOString().split('T')[0]
    obj[string] = { selected: true, selectedColor: primary }
    return obj
  }, [current])

  const doseDate = useMemo(() => {
    return doses[doses.length - 1].toISOString().split('T')[0]
  }, [doses])

  const riskDay = useMemo(() => {
    const today = new Date()
    const diff = current - today
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return Math.round(reduxUser.probs[diffDays] * 100 * 100) / 100
  }, [current, doses, reduxUser.probs])

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
            height: 370,
            marginTop: 30,
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 15,
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            textDayFontSize: 14,
            textMonthFontSize: 14,
            textDayHeaderFontSize: 14,
            todayTextColor: primary,
            arrowColor: primary,
          }}
          markedDates={selectedDate}
          minDate={today}
          //current={current}
          onDayPress={(day) => {
            setCurrent(new Date(day.dateString))
          }}
        />
        <View
          style={{
            borderWidth: 2,
            borderColor: white,
            marginBottom: 25,
            marginHorizontal: 12,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: primary,
            flex: 2,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: '200',
              color: white,
            }}
          >
            Risk
          </Text>
          <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
            <Text
              style={{
                fontSize: 70,
                fontWeight: '200',
                color: white,
              }}
            >
              {riskDay}%
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '200',
                color: grey,
                marginTop: -7,
              }}
            >
              {convertDate}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default DateList
