import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.card}>
        <Text style={styles.title} textAlign="left">Head</Text>
        <Text style={styles.context} textAlign="left">Context</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.likeButton}
            title="Like"
            onPress={() => {
              // Do something when the like button is pressed
            }}
          />
          <Button
            style={styles.dislikeButton}
            title="Dislike"
            onPress={() => {
              // Do something when the dislike button is pressed
            }}
          />
        </View>
      </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000000',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
      },
      context: {
        fontSize: 16,
        textAlign: 'left',
      },
      buttonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      likeButton: {
        backgroundColor: '#337ab7',
        color: '#fff',
        width: 100,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      dislikeButton: {
        backgroundColor: '#d33',
        color: '#fff',
        width: 100,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
})