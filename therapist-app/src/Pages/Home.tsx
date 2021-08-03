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

const Item = ({ item, onPress }): React.ReactElement<any> => {
  return (
    <TouchableOpacity onPress={onPress} style={
      {
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: primary,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
    }>
      <View style={
        {
          justifyContent: 'center',
          alignItems: 'center',
        }
      }>
      <Text style={
        {
          fontSize: 35,
          color: primary,
        }
      }
      >{item.name}</Text>
      </View>
      <View style={
        {
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 2
        }
      }>
        <View style={
        {
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          flex: 1,
        }
        }>
          <Text style={{fontSize: 15,color: primary,}}>Age - 16</Text>
          <Text style={{fontSize: 15,color: primary, marginLeft: 15}}>Age - 16</Text>
        </View>
        <View style={
        {
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }
        }>
          <Text style={{fontSize: 15,color: primary,}}>Age - 16</Text>
          <Text style={{fontSize: 15,color: primary,marginLeft: 15}}>Age - 16</Text>
        </View>
      </View>
      <View style={
        {
          justifyContent: 'center',
          alignItems: 'center',
        }
      }>
      <Text style={
        {
          fontSize: 35,
          color: primary,
        }
      }
      >35%</Text>
      </View>
    </TouchableOpacity>
  )
}

const Home = ({ navigation }): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)
  const data = [
    {
      name: 'Bob Joe',
      id: '1'
    },
    {
      name: 'John Doe',
      id: '2'
    },
    {
      name: 'Jane Doe',
      id: '3'
    },
  ]

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          
        }}
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
          marginTop: 30,
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
         / >
      </SafeAreaView>
    </View>
  )
}

export default Home
