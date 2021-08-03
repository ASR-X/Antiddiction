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
} from 'react-native'

import { Colors } from '../Components/styles'

// Colors
const { primary, white, grey, black } = Colors

import { selectUser, risk } from '../Redux/slices/user'
import { useReduxDispatch, useReduxSelector } from '../Redux'

const Home = ({ navigation }): React.ReactElement => {
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
          Days Clean
        </Text>
        <ChonseSelect
          height={25}
          style={{ marginLeft: 15, marginBottom: 10 }}
          data={data}
          initValue={'0'}
          backgroundColor="#000000"
        />

        <ProgressRings data={[0.4, 0.6, 0.8]} />
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
      </SafeAreaView>
    </View>
  )
}

export default Home
