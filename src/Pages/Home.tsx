import React from 'react'

import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'

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
        <VerticalSwiper />
        <CategoryContainer>
          <Categories label="Meat" navigation={navigation} title="Meat" />
          <Categories label="Seafood" navigation={navigation} title="Seafood" />
          <Categories label="Poultry" navigation={navigation} title="Poultry" />
        </CategoryContainer>
        <CategoryContainer>
          <Categories label="Produce" navigation={navigation} title="Produce" />
          <Categories label="Frozen" navigation={navigation} title="Frozen" />
          <Categories label="Dairy" navigation={navigation} title="Dairy" />
        </CategoryContainer>

        <Text style={{ fontWeight: 'bold', padding: 5, alignSelf: 'center' }}>
          Recently Viewed
        </Text>
        <FlatList
          data={RecentlyViewed}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            flex: 1,
            paddingBottom: 50,
            marginTop: 10,
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
