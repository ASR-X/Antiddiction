import React from 'react'
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native'
import { MainRoutes } from '../Navigators/routes'

//Components
import { Colors } from '../Components/styles'

import CardView from '../Components/CardView'

//Data
import MeatData from '../Data/MeatData'

// Colors
const { greyLight, white, grey, primary, black } = Colors

//Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Favorites = ({ navigation }): React.ReactElement => {
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
    <SafeAreaView style={{ backgroundColor: white, flex: 1 }}>
      <FlatList
        data={MeatData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ padding: 20, flex: 1, paddingBottom: 50 }}
      />
    </SafeAreaView>
  )
}

export default Favorites
