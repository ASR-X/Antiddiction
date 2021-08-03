import React, { useRef, useState } from 'react'

import { FlatList, TouchableOpacity, StyleSheet, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { marginBottom } from 'styled-system'
import { useReduxDispatch, useReduxSelector } from '../Redux'
import userSlice, { selectUser } from '../Redux/slices/user'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { QuestionText, Colors } from './styles'

const { primary, tertiary, white, black } = Colors

const Item = ({ item, hasDate, date, onDatePress, onAddPress, onRemovePress, lastBlock }): React.ReactElement<any> => {
  return (
    <View style={{flex:1, flexDirection: 'row'}}>
    <TouchableOpacity onPress={onDatePress} style={[styles.item]}>
      {hasDate ? (
        <QuestionText style={{fontSize: 15}}>{date}</QuestionText>
      ) : (
        <QuestionText style={{fontSize: 15}}>Select Date</QuestionText>
      )}
    </TouchableOpacity>
      { lastBlock === item.id ?
      <View style={{flex:2, flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
        <TouchableOpacity onPress={onAddPress} style={{marginLeft: 40, marginRight: 23, justifyContent: 'center'}}>
            <MaterialCommunityIcons name="plus" color={white} size={35} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onRemovePress(item.id)} style={{justifyContent: 'center'}}>
            <MaterialCommunityIcons name="window-close" color={white} size={35} />
        </TouchableOpacity>
        </View>
        :
        <View style={{flex:2, flexDirection: 'row', alignItems: 'center',justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => onRemovePress(item.id)} style={{justifyContent: 'center',  marginLeft: 100,}}>
            <MaterialCommunityIcons name="window-close" color={white} size={35} />
        </TouchableOpacity>
        </View>
      }
    </View>
  )
}

export const CalendarChoice = ({ props, num }): React.ReactElement<any> => {
  const [dates, setDates] = useState([null] as any)
  const [data, setData] = useState(props)
  const [selectedId, setSelectedId] = useState(null as number)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const dispatch = useReduxDispatch()


  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset*60*1000))
    date = date.toISOString().split('T')[0]
    if (dates.includes(date)) {hideDatePicker(); return}
    var reduxDates = []
    if (selectedId < dates.length) {
      reduxDates = dates.slice(0, selectedId - 1).concat(date).concat(dates.slice(selectedId))
        setDates(dates.slice(0, selectedId - 1).concat(date).concat(dates.slice(selectedId)))
    }
    else {
        reduxDates = dates.slice(0, selectedId - 1).concat(date)
        setDates(dates.slice(0, selectedId - 1).concat(date))
    }
    reduxDates = reduxDates.filter(date => date !== null)
    dispatch(userSlice.actions.setFactor({ [num]: reduxDates }))
    
    hideDatePicker();
  };

  const renderItem = ({ item }) => {
    const hasDate = dates[item.id - 1] ? true : false
    const lastBlock = data.length
    return (
      <Item
        item={item}
        hasDate={hasDate}
        date={hasDate ? dates[item.id - 1] : null}
        onDatePress={() => {
          setSelectedId(item.id)
          setDatePickerVisibility(true);
        }}
        onAddPress={() => {
            const newItem = {
                'id': (data.length + 1),
            }
            setData(data.concat(newItem))
            setDates(dates.concat(null))
        }}
        onRemovePress={
          (itemId) => {
            if (itemId === 1 && data.length === 1) return
            var reduxDates = [] 
            if (itemId > 1) {
              reduxDates = dates.slice(0, itemId-1).concat(dates.slice(itemId))
              setData(data.slice(0, itemId-1).concat(data.slice(itemId).map(item => ( {'id': item.id -1}) )))
              setDates(dates.slice(0, itemId-1).concat(dates.slice(itemId)))
            }
            if (itemId === 1) {
              reduxDates = dates.slice(itemId)
              setData(data.slice(itemId).map(item => ( {'id': item.id -1}) ))
              setDates(dates.slice(itemId))
            }
            reduxDates = reduxDates.filter(date => date !== null)
            dispatch(userSlice.actions.setFactor({ [num]: reduxDates }))
        }}
        lastBlock = {lastBlock}
      />
    )
  }

  return (
    <>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center',}}
    />
    <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
    />
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    width: '100%',
    marginVertical: 5,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: white,
    flex: 2,
  },
})