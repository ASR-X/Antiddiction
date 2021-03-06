import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'
import { BezierGraph } from '../Components/BezierGraph'
import { ProgressRings } from '../Components/ProgressRings'
import ChonseSelect from '../Components/ChonseSelect'

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
  Button,
  TouchableOpacity,
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
  SplashButtonView,
  SplashTextSign,
  StyledButton,
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
import userSlice, { selectUser, risk } from '../Redux/slices/user'
import { useReduxDispatch, useReduxSelector } from '../Redux'
import { marginBottom } from 'styled-system'
import { getDefaultMiddleware } from '@reduxjs/toolkit'

const Home = ({ navigation }): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)
  const dispatch = useReduxDispatch()
  const [chonseActive, setChonseActive] = React.useState('0')
  const [doses, setDoses] = React.useState([])

  const diff = useMemo(() => {
    var dates = reduxUser.dose.map((date) => new Date(date))
    var date = dates.reduce(function (p, v) {
      return p > v ? p : v
    })
    const today = new Date()
    const diffDays: number = (today - date) / (1000 * 3600 * 24)
    return {
      days: parseFloat(diffDays.toFixed(2)),
      weeks: parseFloat((diffDays / 7).toFixed(2)),
      months: parseFloat((diffDays / 30).toFixed(2)),
      years: parseFloat((diffDays / 365).toFixed(2)),
    }
  }, [reduxUser.doses, reduxUser])

  const getData = useCallback(
    (active) => {
      switch (active) {
        case '0':
          return {
            labels: ['2W', '3W', '1M'],
            data: [
              parseFloat((diff.weeks / 2).toFixed(2)),
              parseFloat((diff.weeks / 3).toFixed(2)),
              parseFloat((diff.months / 1).toFixed(2)),
            ],
          }
        case '1':
          return {
            labels: ['1M', '2M', '3M'],
            data: [
              parseFloat(diff.months.toFixed(2)),
              parseFloat((diff.months / 2).toFixed(2)),
              parseFloat((diff.months / 3).toFixed(2)),
            ],
          }
        case '2':
          return {
            labels: ['4M', '6M', '1Y'],
            data: [
              parseFloat((diff.months / 4).toFixed(2)),
              parseFloat((diff.months / 6).toFixed(2)),
              parseFloat(diff.years.toFixed(2)),
            ],
          }
      }
    },
    [reduxUser.dose, diff]
  )

  const fetchRisk = useCallback(async () => {
    const resultAction = await dispatch(risk(reduxUser))
    if (risk.fulfilled.match(resultAction)) {
      var date = new Date()
      const offset = date.getTimezoneOffset()
      date = new Date(date.getTime() - offset * 60 * 1000)
      var s_date = date.toISOString().split('T')[0]
      if (reduxUser.dose.includes(s_date)) {
        var new_probs = [1].concat(reduxUser.probs.slice(1))
        dispatch(userSlice.actions.setFactor({ probs: new_probs }))
      }
      console.log(reduxUser)
    } else {
      console.log(resultAction)
    }
  }, [reduxUser.dose])

  useEffect(() => {
    fetchRisk()
  }, [fetchRisk])

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: white,
          alignContent: 'center',
          //marginTop: 30,
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: primary,
            marginTop: 20,
            marginBottom: 15,
            marginHorizontal: 12,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: '200',
              padding: 10,
              color: primary,
            }}
          >
            Clean
          </Text>
          <View style={{ marginRight: 50 }}>
            <ProgressRings data={getData(chonseActive)} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <View style={{ flex: 2.4 }}>
              <ChonseSelect
                height={25}
                style={{ marginBottom: 15, alignSelf: 'flex-end' }}
                data={data}
                initValue={chonseActive}
                color={primary}
                onPress={(item) => {
                  setChonseActive(item.value)
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 15,
                flex: 2,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 50,
                  backgroundColor: '#cf0303',
                  borderRadius: 10,
                  marginLeft: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  var date = new Date()
                  const offset = date.getTimezoneOffset()
                  date = new Date(date.getTime() - offset * 60 * 1000)
                  var s_date = date.toISOString().split('T')[0]
                  if (reduxUser.dose.includes(s_date)) {
                    return
                  }
                  var new_dates = reduxUser.dose.concat(s_date)
                  dispatch(userSlice.actions.setFactor({ dose: new_dates }))
                }}
              >
                <Text style={{ fontSize: 21, color: white }}>Dosed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
              {reduxUser.probs ? (reduxUser.probs[0] * 100).toFixed(2) : 50}%
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '200',
                color: grey,
                marginTop: -7,
              }}
            >
              Today
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: 14,
            }}
          >
            <View
              style={{
                flex: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '200',
                  color: white,
                }}
              >
                {reduxUser.probs ? (reduxUser.probs[1] * 100).toFixed(2) : 50}%
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '200',
                  color: grey,
                }}
              >
                Tomorrow
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '200',
                  color: white,
                }}
              >
                {reduxUser.probs ? (reduxUser.probs[2] * 100).toFixed(2) : 50}%
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '200',
                  color: grey,
                }}
              >
                2nd Day
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '200',
                  color: white,
                }}
              >
                {reduxUser.probs ? (reduxUser.probs[3] * 100).toFixed(2) : 50}%
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '200',
                  color: grey,
                }}
              >
                3rd Day
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home
