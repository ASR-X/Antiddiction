import React, { useCallback, useEffect } from 'react'

import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'
import { BezierGraph } from '../Components/BezierGraph'
import { ProgressRings } from '../Components/ProgressRings'
import ChonseSelect from '../Components/ChonseSelect'

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
import { selectUser, risk } from '../Redux/slices/user'
import { useReduxDispatch, useReduxSelector } from '../Redux'
import { marginBottom } from 'styled-system'

const Home = ({ navigation }): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)
  const dispatch = useReduxDispatch()
  const [chonseActive, setChonseActive] = React.useState('0')

  const fetchRisk = useCallback(async () => {
    const resultAction = await dispatch(risk(reduxUser))
    if (risk.fulfilled.match(resultAction)) {
      console.log(reduxUser)
    }
    else {
      console.log(resultAction)
    }
  }, [reduxUser.age])

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
          marginTop: 30,
        }}
      >
        <View style={{ borderWidth:2, borderColor: primary, marginTop: 20, marginBottom: 15, marginHorizontal: 12, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
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
          <View style={{marginRight: 50}}>
          <ProgressRings data={[0.4, 0.6, 0.8]}/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center', width:'100%'}}>
            <View style={{flex:2.4}}>
              <ChonseSelect
                height={25}
                style={{ marginBottom: 15, alignSelf: 'flex-end'}}
                data={data}
                initValue={chonseActive}
                color = {primary}
                onPress={(item)=>{setChonseActive(item.value)}}
              />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center',marginBottom: 15, flex:2}}>
            <TouchableOpacity style={{width:120, height:50, backgroundColor: primary, borderRadius: 10 , marginLeft: 18, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigation.navigate(MainRoutes.Question1)}
            >
              <Text style={{fontSize: 21, color: white}}>Dosed</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ borderWidth:2, borderColor: white, marginBottom: 15, marginHorizontal: 12, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: primary, 
        flex: 2}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '200',
            color: white,
          }}
        >
          Risk
        </Text>
        <View style={{alignItems: 'center', justifyContent: 'flex-start'}}>
        <Text
          style={{
            fontSize: 70,
            fontWeight: '200',
            color: white,
          }}
        >
          50%
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '200',
            color: grey,
            marginTop: -7
          }}
        >
          Today
        </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width:'100%', marginTop: 14}}>
          <View style={{flex:3, alignItems: 'center', justifyContent: 'center',}}>
              <Text
              style={{
                fontSize: 25,
                fontWeight: '200',
                color: white,
              }}
            >
              50%
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
          <View style={{flex:3, alignItems: 'center', justifyContent: 'center',}}>
              <Text
              style={{
                fontSize: 25,
                fontWeight: '200',
                color: white,
              }}
            >
              50%
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
          <View style={{flex:3, alignItems: 'center', justifyContent: 'center',}}>
              <Text
              style={{
                fontSize: 25,
                fontWeight: '200',
                color: white,
              }}
            >
              50%
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
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home
