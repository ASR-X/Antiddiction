import React, { useState } from 'react'

//Components
import {
  Colors,
  CardImageWrapper,
  CardImage,
  CardInfo,
  TextWrapper,
  CardTitle,
  CardDetails,
  CardDetailsDark,
} from './styles'

//react native elements
import { Card } from 'react-native-elements'
import { Alert, Platform, ToastAndroid, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

// Colors
const { grey, primary } = Colors

const CardView = ({ itemData, onPress }) => {
  const [data, setData] = useState({
    isFav: false,
  })

  const onPressHandler = () => {
    setData({
      ...data,
      isFav: !data.isFav,
    })
    if (data.isFav) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Removed from to Favorites', ToastAndroid.SHORT)
      } else {
        Alert.alert('Removed from Favorites')
      }
    } else {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Added to Favorites', ToastAndroid.SHORT)
      } else {
        Alert.alert('Added to Favorites')
      }
    }
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        containerStyle={{
          borderRadius: 8,
          height: 100,
          shadowColor: grey,
          shadowOffset: { width: 1, height: 1 },
          shadowRadius: 2,
          shadowOpacity: 0.8,
          elevation: 5,
          padding: 0,
          marginLeft: 0,
          width: '100%',
          marginBottom: 10,
          marginVertical: 10,
        }}
        wrapperStyle={{ flexDirection: 'row' }}
      >
        <CardImageWrapper>
          <CardImage source={itemData.image} resizeMode="cover" />
        </CardImageWrapper>
        <CardInfo>
          <TextWrapper>
            <CardTitle>{itemData.title}</CardTitle>
            <TouchableOpacity onPress={onPressHandler}>
              {data.isFav ? (
                <FontAwesome
                  name="heart"
                  size={15}
                  style={{ marginRight: 5 }}
                  color={primary}
                />
              ) : (
                <FontAwesome
                  name="heart-o"
                  size={15}
                  style={{ marginRight: 5 }}
                />
              )}
            </TouchableOpacity>
          </TextWrapper>
          <TextWrapper style={{ justifyContent: 'flex-start' }}>
            <CardTitle style={{ marginRight: 8 }}>
              {itemData.price + '/lb'}
            </CardTitle>
            <CardDetails>{'#' + itemData.id}</CardDetails>
          </TextWrapper>

          <CardDetailsDark style={{ marginTop: 5 }}>
            {'Min Purchase Amount: ' + itemData.minimumPurchase + ' Cases'}
          </CardDetailsDark>
          <CardDetailsDark>
            {'Avg Weight/Case: ' + itemData.weight + 'lb'}
          </CardDetailsDark>
          <CardDetailsDark>
            {'Shelf Life: ' + itemData.shelfLife + ' Days'}
          </CardDetailsDark>
          <CardDetails numberOfLines={1}>{itemData.description}</CardDetails>
        </CardInfo>
      </Card>
    </TouchableOpacity>
  )
}

export default CardView
