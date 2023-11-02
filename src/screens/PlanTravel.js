import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator, ScrollView,TouchableOpacity } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';





export default function PlanTravel({ navigation }) {
    return(
        <View style = {styles.container}>
            <Text style ={styles.header}>Planlegg ny reise</Text>
            <Text style= {styles.subtitle}>For å planlegge reisen din på best mulig
                måte, må jeg vite litt om dine preferanser. 
                Velg Hvordan du vil oppgi disse...
            </Text>

            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Preferences")}>
                <Text style={styles.buttonTextNy}>Jeg vil svare på spørsmål</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Dagsplan")}>
                <Text style={styles.buttonTextNy}>Jeg skriver en tekst selv</Text> 
            </TouchableOpacity>

        </View>
        
    )
}

const styles = StyleSheet.create({
    //View
  container: {
    flex: 1,
    backgroundColor: "#F1EEE4",
    padding: 20, 
  },
  //Text
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    
    marginBottom: 15,
    marginTop: 100,
    },

  body:{
    fontSize: 16,
    marginBottom: 30,
    
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 50
},
bottomContainer: {
    //flex: 1, 
    justifyContent: 'flex-end', 
    paddingTop: 20,
    paddingBottom: 20,
    margin: 8,
    alignItems: "center",
    backgroundColor:"#F1EEE4",
    borderWidth: 2, 
    borderRadius: 8,
    borderColor: '#2B3D7D',
  },
  buttonTextNy: {
    color: '#2B3D7D',
    fontSize: 16,
  
  },
})
