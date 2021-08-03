import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import { MainRoutes } from '../Navigators/routes'

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
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'

import { Colors } from '../Components/styles'
import { NPatients } from '../Data/NPatients'

// Colors
const { primary, white, grey, black } = Colors

const Dashboard = ({ route, navigation }): React.ReactElement => {
  const patient = NPatients[3]
  const [chonseActive, setChonseActive] = React.useState('0')
  const [doses, setDoses] = React.useState([])

  const diff = useMemo(() => {
    var dates = patient.dose.map((date) => new Date(date))
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
  }, [patient.dose, patient])

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
    [patient.dose, diff]
  )

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: white,
          alignContent: 'center',
          marginTop: 30,
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
                style={{ marginBottom: 15, alignSelf: 'center' }}
                data={data}
                initValue={chonseActive}
                color={primary}
                onPress={(item) => {
                  setChonseActive(item.value)
                }}
              />
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
              {patient.probs ? (patient.probs[0] * 100).toFixed(2) : 50}%
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
                {patient.probs ? (patient.probs[1] * 100).toFixed(2) : 50}%
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
                {patient.probs ? (patient.probs[2] * 100).toFixed(2) : 50}%
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
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: '200',
                    color: white,
                  }}
                >
                  {patient.probs ? (patient.probs[2] * 100).toFixed(2) : 50}%
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
                  fontSize: 15,
                  fontWeight: '200',
                  color: grey,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: '200',
                    color: white,
                  }}
                >
                  {patient.probs ? (patient.probs[3] * 100).toFixed(2) : 50}%
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
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Dashboard
