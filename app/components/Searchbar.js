import React from "react";
import { View , TextInput, StyleSheet } from "react-native";

const Searchbar = () => {
    return(
        <View>
            <TextInput style={styles.Searchone} placeholder="Search here .." ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    Searchone: {
        width : '90%',
        marginTop : '10%',
        marginLeft : '5%',
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
    },
})


export default Searchbar;