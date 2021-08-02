import React from 'react'

import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'
import { BezierGraph } from '../Components/BezierGraph'
import { ProgressRings } from '../Components/ProgressRings'
//Data
import RecentlyViewed from '../Data/RecentlyViewed'

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

const Home = ({ navigation }): React.ReactElement => {
  const renderItem = ({ item }) => {
    return (
      <CardView
        itemData={item}
        onPress={() =>
          navigation.navigate(MainRoutes.CardItemDetails, { itemData: item })
        }
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
        <BezierGraph
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
        />
      </SafeAreaView>
    </View>
  )
}

const Categories = ({ label, navigation, title }) => {
  return (
    <CategoryButton
      onPress={() =>
        navigation.navigate(MainRoutes.CardListScreen, { title: title })
      }
    >
      <CategoryIcon>
        <IconImage label={label} />
      </CategoryIcon>
      <CategoryButtonText>{label}</CategoryButtonText>
    </CategoryButton>
  )
}

const IconImage = ({ label }) => {
  if (label === 'Meat') {
    return (
      <Image
        source={require('../Assets/FoodIcons/meatOutline.png')}
        resizeMode="center"
        style={{ width: 25, height: 25, tintColor: primary }}
      />
    )
  } else if (label === 'Seafood') {
    return (
      <Image
        source={require('../Assets/FoodIcons/seafoodOutline.png')}
        resizeMode="center"
        style={{ width: 25, height: 25, tintColor: primary }}
      />
    )
  } else if (label === 'Poultry') {
    return (
      <Image
        source={require('../Assets/FoodIcons/poultryOutline.png')}
        resizeMode="center"
        style={{ width: 25, height: 25, tintColor: primary }}
      />
    )
  } else if (label === 'Produce') {
    return (
      <Image
        source={require('../Assets/FoodIcons/produceOutline.png')}
        resizeMode="center"
        style={{ width: 25, height: 25, tintColor: primary }}
      />
    )
  } else if (label === 'Frozen') {
    return (
      <Image
        source={require('../Assets/FoodIcons/frozenOutline.png')}
        resizeMode="center"
        style={{ width: 25, height: 25, tintColor: primary }}
      />
    )
  } else {
    return (
      <Image
        source={require('../Assets/FoodIcons/dairyOutline.png')}
        resizeMode="center"
        style={{ width: 25, height: 25, tintColor: primary }}
      />
    )
  }
}

export default Home
