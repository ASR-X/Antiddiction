import React from 'react'

//Swiper
import Swiper from 'react-native-swiper'

//Components
import { Colors, SliderContainer, Slide, SliderImage } from './styles'
import { Text } from 'react-native'

// Colors
const { primary, white, grey, highlight } = Colors

const HorizontalSwiper = () => {
  return (
    <SliderContainer style={{ width: '100%' }}>
      <Swiper
        autoplay
        height={300}
        horizontal={true}
        activeDotColor={highlight}
      >
        <Slide>
          <SliderImage
            resizeMode="cover"
            source={require('../Assets/slider1.jpg')}
          />
          <Text style={{ position: 'absolute' }}>Hello</Text>
        </Slide>
        <Slide>
          <SliderImage
            resizeMode="cover"
            source={require('../Assets/slider2.jpg')}
          />
        </Slide>
        <Slide>
          <SliderImage
            resizeMode="cover"
            source={require('../Assets/slider3.jpg')}
          />
        </Slide>
        <Slide>
          <SliderImage
            resizeMode="cover"
            source={require('../Assets/slider4.jpg')}
          />
        </Slide>
      </Swiper>
    </SliderContainer>
  )
}

export default HorizontalSwiper
