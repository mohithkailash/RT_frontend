import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

const Screen = ({children}) => {
  return (
    <View>
      {children}
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({})