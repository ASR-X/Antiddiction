import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper'

import { MainRoutes } from '../Navigators/routes'

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useReduxDispatch } from '../Redux'
import { logout } from '../Redux/slices/user'

export function DrawerContent(props) {
  const paperTheme = useTheme()
  const dispatch = useReduxDispatch()

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('../Assets/mockPFP.jpg')}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="heart-outline" color={color} size={size} />
              )}
              label="Favorites"
              onPress={() => {
                props.navigation.navigate(MainRoutes.Favorites)
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="credit-card-outline" color={color} size={size} />
              )}
              label="Payment"
              onPress={() => {
                props.navigation.navigate(MainRoutes.Payment)
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="information-outline" color={color} size={size} />
              )}
              label="About"
              onPress={() => {
                props.navigation.navigate(MainRoutes.About)
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate(MainRoutes.Support)
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>Notifications</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={async () => {
            await dispatch(logout())
          }}
        />
      </Drawer.Section>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})
