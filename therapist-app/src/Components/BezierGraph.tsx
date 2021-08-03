import React from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit'
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native'
export const BezierGraph = ({ data }): React.ReactElement => {
  return (
    <LineChart
      data={data}
      width={Dimensions.get('window').width} // from react-native
      height={220}
      chartConfig={{
        backgroundColor: '#0000ff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 1,
      }}
    />
  )
}
