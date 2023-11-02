import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator, ScrollView , TouchableOpacity} from 'react-native';



export default function GenerateTravel({ navigation, route}) {
  const { width: screenWidth } = Dimensions.get('window');
  const { serverResponse } = route.params;   
 

    return (
        <ScrollView style = {styles.container}>
            <View style = {{padding:50}}>
                <Text style ={styles.header}> Genererer reise...</Text>
               
                
            </View>

            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Reveal", { serverResponse: serverResponse })}>
                <Text style={styles.buttonTextNy}>Avslør reise</Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Hint")}>
                <Text style={styles.buttonTextNy}>Hint</Text>
            </TouchableOpacity>
            
         
                

        
        
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    //View
  container: {
    flex: 1,
    backgroundColor: "#F1EEE4",
    padding: 10, 
  },
  
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'float left',
    paddingTop: 10,
  },

  //Buttons
  button: {
    margin: 4,
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2B3D7D',
  },
  selectedButton: {
    backgroundColor: '#2B3D7D',
  },
  buttonText: {
    color: '#2B3D7D',
    fontSize: 16,
    
  },
  selectedButtonText: {
    color: 'white',
    fontSize: 16,
  },

     //Text 
     header: {
      fontSize: 24,
      marginVertical: 20,
      
      //fontFamily: "Inter_900Black",
    },
  
    h1:{
      fontSize: 28,
      fontWeight: 'bold',
      paddingTop:10,
      paddingBottom:10,
      //fontFamily: "NotoSans_400Regular",
      
    },
    h2: {
      fontSize: 24,
      marginTop: 20,
      fontWeight: 'bold',
    },
    
    h3: {
      fontSize: 20,
    },
    
    info: {
      fontSize: 16,
    },
  
    smalltext:{
      fontSize: 12,
      padding: 10
    },
    
    body:{
      marginTop: 20,
      fontSize: 16,
    },
  
    bodybold:{
      fontSize: 16,
      fontWeight: 'bold',
      paddingTop: 20,
    },
    

  searchbar:{
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 8,
    width: '100%',
  },
  searchbar:{
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 8,
    width: '100%',
  },

  selectedCountryBox:{
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    margin: 4,
    borderColor: '#2B3D7D',
  },
  selectedCountriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },

  selectedCountriesText: {
    color: '#2B3D7D',
    fontSize: 16,
  },

  answer: {
    color: "white",
    padding: 20,
    margin: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2B3D7D',
    backgroundColor: '#2B3D7D',
    
 },
 
buttonTextNy: {
  color: '#2B3D7D',
  fontSize: 16,

},
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

})