import React, { useCallback, useEffect } from 'react'

import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'
import { BezierGraph } from '../Components/BezierGraph'
import { ProgressRings } from '../Components/ProgressRings'
import { ChonseSelect } from 'react-native-chonse-select'

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
import { selectUser, risk } from '../Redux/slices/user'
import { useReduxDispatch, useReduxSelector } from '../Redux'

const Home = ({ navigation }): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)
  const dispatch = useReduxDispatch()

  const fetchRisk = useCallback(async () => {
    const resultAction = await dispatch(risk(reduxUser))
    if (!risk.fulfilled.match(resultAction)) {
    }
  }, [reduxUser.timeline])

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
