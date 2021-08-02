import React from 'react'

//Swiper
import Swiper from 'react-native-swiper'

//Components
import { Colors, SliderContainer, Slide, SliderImage } from './styles'

// Colors
const { primary, white, grey, highlight } = Colors

const VerticalSwiper = () => {
  return (
    <SliderContainer>
      <Swiper
        autoplay
        height={200}
        horizontal={false}
        activeDotColor={highlight}
      >
        <Slide>
          <SliderImage
            resizeMode="cover"
            source={require('../Assets/slider1.jpg')}
          />
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

export default VerticalSwiper
