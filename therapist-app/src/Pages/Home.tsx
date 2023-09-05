import React, { useCallback, useEffect } from 'react'
import { ProgressRings } from '../Components/ProgressRings''

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
  TouchableOpacity,
} from 'react-native'

import { Colors } from '../Components/styles'

// Colors
const { primary, white, grey, black } = Colors

import { selectUser } from '../Redux/slices/user'
import { useReduxDispatch, useReduxSelector } from '../Redux'
import { Patients } from '../Data/Patients'
import { NPatients } from '../Data/NPatients'
import { MainRoutes } from '../Navigators/routes'

const Item = ({
  item,
  gender,
  admin,
  ldose,
  onPress,
}): React.ReactElement<any> => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: primary,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 35,
              color: primary,
            }}
          >
            {item.name}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 35,
              color: primary,
            }}
          >
            {item.prob}
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 2,
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 3,
          }}
        >
          <Text style={{ fontSize: 15, color: primary }}>Age - {item.age}</Text>
          <Text style={{ fontSize: 15, color: primary }}>
            First Age - {item.firstAge}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 3,
          }}
        >
          <Text style={{ fontSize: 15, color: primary }}>
            Gender - {gender}
          </Text>
          <Text style={{ fontSize: 15, color: primary }}>Route - {admin}</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 3,
          }}
        >
          <Text style={{ fontSize: 13.5, color: primary }}>Dose - {ldose}</Text>
          <Text style={{ fontSize: 15, color: primary }}>
            N. Drugs - {item.drugs.length}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const Home = ({ route, navigation }): React.ReactElement => {
  const renderItem = ({ item }) => {
    var gender = ''
    var admin = ''
    var dose = ''
    if (item.gender === '1') gender = 'Male'
    else if (item.gender === '2') gender = 'Female'
    else gender = 'N/B'

    if (item.admin === '1') admin = 'Oral'
    else if (item.admin === '2') admin = 'Smoke'
    else if (item.admin === '3') admin = 'Inhale'
    else if (item.admin === '4') admin = 'Injection'

    var dates = item.dose.map((date) => new Date(date))
    var l_dose = dates.reduce(function (p, v) {
      return p > v ? p : v
    })

    const offset = l_dose.getTimezoneOffset()
    l_dose = new Date(l_dose.getTime() - offset * 60 * 1000)
    var s_date = l_dose.toISOString().split('T')[0]
    s_date = s_date.slice(2)

    return (
      <Item
        item={item}
        gender={gender}
        admin={admin}
        ldose={s_date}
        onPress={() => {
          navigation.navigate(MainRoutes.Dashboard, { patient: item })
        }}
      />
    )
  }

  console.log(route.params.Home)

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
        <FlatList
          data={route.params.Home ? NPatients : Patients}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
        />
      </SafeAreaView>
    </View>
  )
}

export default Home
