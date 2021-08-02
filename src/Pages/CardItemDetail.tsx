import React, { useRef } from 'react'

import { MainRoutes } from '../Navigators/routes'

//Image Scroll View
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view'

//Animations
import * as Animatable from 'react-native-animatable'

//Components
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native'

import { Colors, CardDetails, TextWrapper } from '../Components/styles'

//Sizes
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55
const MAX_HEIGHT = 350

//Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// Colors
const { primary, white, grey, black } = Colors

const CardItemDetails = ({ route, navigation }): React.ReactElement => {
  const itemData = route.params.itemData
  const navTitleView = useRef()

  const Foreground = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.imageTitle}>{itemData.title}</Text>
      </View>
    )
  }

  const FixedForeground = () => {
    return (
      <Animatable.View style={styles.navTitleView} ref={navTitleView}>
        <Text style={styles.navTitle}>{itemData.title}</Text>
      </Animatable.View>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <StatusBar barStyle="light-content" />
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.8}
        minOverlayOpacity={0.3}
        headerImage={require('../Assets/slider2.jpg')}
        renderForeground={Foreground}
        renderFixedForeground={FixedForeground}
      >
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.fadeInUp(200)}
          onDisplay={() => navTitleView.fadeOut(100)}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={styles.title}>Overview</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <FontAwesome name="dollar" size={14} color={primary} />
              <Text style={{ marginHorizontal: 8, fontWeight: 'bold' }}>
                {itemData.price + '/lb'}
              </Text>
              <Text style={{ color: grey, marginLeft: 5 }}>
                {'#' + itemData.id}
              </Text>
            </View>
          </View>
        </TriggeringView>
        <View style={[styles.section, styles.sectionLarge]}>
          <Text style={styles.sectionContent}>{itemData.description}</Text>
        </View>
        <View style={styles.section}>
          <TextWrapper>
            <Text style={styles.name}>Min Purchase:</Text>
            <Text>{itemData.minimumPurchase + ' Cases'}</Text>
          </TextWrapper>
          <TextWrapper>
            <Text style={styles.name}>Avg Weight/Case:</Text>
            <Text>{itemData.weight + ' lb'}</Text>
          </TextWrapper>
          <TextWrapper>
            <Text style={styles.name}>Shelf Life:</Text>
            <Text>{itemData.shelfLife + ' Days'}</Text>
          </TextWrapper>
        </View>
        <View style={styles.section}>
          <View style={styles.categories}>
            <View style={styles.categoryContainer}>
              <FontAwesome name="tag" size={16} color="#fff" />
              <Text style={styles.category}>Frozen</Text>
            </View>
            <View style={styles.categoryContainer}>
              <FontAwesome name="tag" size={16} color="#fff" />
              <Text style={styles.category}>Meat</Text>
            </View>
            <View style={styles.categoryContainer}>
              <FontAwesome name="tag" size={16} color="#fff" />
              <Text style={styles.category}>Pizza</Text>
            </View>
          </View>
        </View>
      </ImageHeaderScrollView>
    </View>
  )
}

export default CardItemDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
})
