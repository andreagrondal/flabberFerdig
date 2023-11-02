import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';




export default function RevealScreen({navigation, route}) {
    const { serverResponse } = route.params;

    return(
        <ScrollView style = {styles.container}>
            <Text style = {styles.header}>Surprise!</Text>
            <Text>{serverResponse}</Text>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    //View
  container: {
    flex: 1,
    backgroundColor: "#F1EEE4",
    padding: 10, 
  },
    //Text 
  header: {
    fontSize: 36,
    marginVertical: 20,
  },
})