import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

const Screen = ({children}) => {
  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
      {children}
    </ScrollView>
  )
}

export default Screen

const styles = StyleSheet.create({})