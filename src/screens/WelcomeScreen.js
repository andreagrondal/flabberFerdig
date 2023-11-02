import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator, ScrollView,TouchableOpacity } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';





export default function WelcomeScreen({ navigation }) {
    const { width: screenWidth } = Dimensions.get('window');

    return (
        <ScrollView style ={styles.container}>
            <Text style ={styles.header}>Hei, XXX!</Text>

            <TouchableOpacity style={styles.bottomContainerNy} onPress={() => navigation.navigate("Dagsplan")}>
                <Text style={styles.buttonTextNy}>Du har ingen planlagte reiser!</Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Plan")}>
                <Text style={styles.buttonTextNy}>Planlegg ny reise</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/velkommeni.png')} style={{ width: screenWidth, height: 290, margin: -20 }}/>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    //View
  container: {
    flex: 1,
    backgroundColor: "#F1EEE4",
    paddingLeft: 20, 
    paddingRight: 20, 
  },
   
  //Text
  header: {
    fontSize: 36,
    marginVertical: 100, 
    fontWeight: 'bold',
  },
  bottomContainerNy: {
    flex: 1, 
    justifyContent: 'center', 
    paddingTop: 60,
    paddingBottom: 60,
    margin: 6,
    alignItems: "center",
    backgroundColor:"#F1EEE4",
    borderWidth: 1, 
    borderRadius: 8,
    borderColor: '#2B3D7D',
    borderStyle: 'dashed',

  },
  buttonTextNy: {
    color: '#2B3D7D',
    fontSize: 16,
  
  },
  button: {
    backgroundColor: '#F1EEE4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
  },
  responseText: {
    backgroundColor: '#F1EEE4',
    padding: 50,
    color: '#000',
    fontSize: 16,

  },
   //Buttons
   button: {
    margin: 4,
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#000',
  },
  //knapp nederst  
  bottomContainer: {
    flex: 1, 
    justifyContent: 'flex-end', 
    paddingTop: 20,
    paddingBottom: 20,
    margin: 4,
    alignItems: "center",
    backgroundColor:"#F1EEE4",
    borderWidth: 2, 
    borderRadius: 8,
    borderColor: '#2B3D7D',
  },
  //knappen med stiplet linje
  
})