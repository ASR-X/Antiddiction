import React from 'react'

import { MainRoutes } from '../Navigators/routes'

//Gradient
import { LinearGradient } from 'expo-linear-gradient'

//Animations
import * as Animatable from 'react-native-animatable'

//Icon
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

//Components
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native'

import {
  Colors,
  SplashButtonView,
  SplashFooter,
  SplashHeaderView,
  SplashLogo,
  SplashTitle,
  SplashText,
  SplashTextSign,
} from '../Components/styles'

// Colors
const { primary, white, grey, black } = Colors

//Screen Dimensions
const { height } = Dimensions.get('screen')
const height_logo = height * 0.28

const SplashScreen = ({ navigation }): React.ReactElement => {
  return (
    <View style={{ flex: 1, backgroundColor: primary }}>
      <StatusBar barStyle="light-content" />
      <SplashHeaderView>
        <Animatable.Image
          style={styles.logo}
          source={require('../Assets/mockLogo.png')}
          resizeMode="stretch"
          animation="bounceIn"
          duration={1500}
        />
      </SplashHeaderView>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <SplashTitle>Make Food Price Comparisons Quickly!</SplashTitle>
        <SplashText>Sign in with your account</SplashText>
        <SplashButtonView>
          <TouchableOpacity
            onPress={() => navigation.navigate(MainRoutes.SignIn)}
          >
            <LinearGradient
              colors={['#FFA07A', '#FF6347']}
              style={{
                width: 150,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                flexDirection: 'row',
              }}
            >
              <SplashTextSign>Get Started!</SplashTextSign>
              <MaterialIcons name="navigate-next" color={white} size={15} />
            </LinearGradient>
          </TouchableOpacity>
        </SplashButtonView>
      </Animatable.View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
})
