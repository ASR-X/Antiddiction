import React, { useCallback, useEffect } from 'react'
import { ProgressRings } from '../Components/ProgressRings'
import { ChonseSelect } from 'react-native-chonse-select'

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

const Item = ({ item, onPress }): React.ReactElement<any> => {
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
            35%
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
          <Text style={{ fontSize: 15, color: primary }}>Age - 16</Text>
          <Text style={{ fontSize: 15, color: primary }}>Age - 16</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 3,
          }}
        >
          <Text style={{ fontSize: 15, color: primary }}>Age - 16</Text>
          <Text style={{ fontSize: 15, color: primary }}>Age - 16</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 3,
          }}
        >
          <Text style={{ fontSize: 15, color: primary }}>Age - 16</Text>
          <Text style={{ fontSize: 15, color: primary }}>Age - 16</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const Home = ({ route, navigation }): React.ReactElement => {
  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => {}} />
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
