import { SafeAreaView, Text, View } from 'react-native'
import { MainRoutes } from '../Navigators/routes'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
//Redux
import { useReduxDispatch } from '../Redux'

//Components
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {
  Colors,
  Avatar,
  UserInfoSection,
  StyledTitle,
  Caption,
  Row,
  InfoBoxWrapper,
  InfoBox,
  CategoryButtonText,
  MenuWrapper,
  MenuItem,
  MenuItemText,
  StyledContainer,
} from '../Components/styles'
import { Image } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

// Colors
const { greyLight, white, grey, primary, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'

const Plus = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  return (
    <View style={{ backgroundColor: white, flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
      </View>
    </View>
  )
}


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: white, alignSelf: 'center', width: 300, height: 300, 
        marginTop: 25, marginBottom: 25, marginLeft: 25, marginRight: 25,}}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}
