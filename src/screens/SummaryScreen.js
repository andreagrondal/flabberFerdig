import React from "react";
import { useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, ActivityIndicator } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';


export default function SummaryScreen({route, navigation}) {
  const { selectedRegions, selectedKlima, selectedInterest, selectedCountries} = route.params;
  const { width: screenWidth } = Dimensions.get('window');
  const [serverResponse, setServerResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const sendPreferencesToServer = async () => {
    setIsLoading(true);
    try {
        const response = await fetch('http://192.168.10.116:4040/generateTravelPlan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                selectedRegions,
                selectedKlima,
                selectedInterest,
                selectedCountries
            }),
        });

        const data = await response.json();
        navigation.navigate("Generate", { serverResponse: data.message });
        //setServerResponse(data.message);
    } catch (error) {
        console.error('Error:', error);
        setServerResponse("Kommunikasjonsfeil med serveren.");
    } finally {
      setIsLoading(false);
  }
};

  
  return (
  <ScrollView style= {styles.container}>
  
    <View style={styles.padbox}>
        <Text style={styles.header}>Sammendrag</Text>
    <Text style={styles.body}> 
          <Text style={{fontWeight: "bold"}}>6 personer </Text>vil dra på reise i 
          <Text style={{fontWeight: "bold"}}> 3 netter </Text>en gang mellom 
          <Text style={{fontWeight: "bold"}}> 27.10.2023</Text> og 
          <Text style={{fontWeight: "bold"}}> 26.11.2023.</Text></Text>

          
         

         
    </View>
    <Image source={require('../../assets/icon1.png')} style={{ width: screenWidth, height: 400, margin: -20, marginTop:-100, marginBottom:-50 }}/>
    
    <View style= {styles.bubble1}>
      
      
      
          <Text style={styles.h2}>Ditt budsjett</Text>
    <Text style= {styles.info}>Prisklasse <Text style={{fontWeight: "bold"}}> 5000 - 10 000 NOK </Text> med følgende prioritering:</Text>
      <Text style={styles.body}>1   Mat</Text>
      <Text style={styles.info}>2   Overnatting</Text>
      <Text style={styles.info}>3   Komfortabel reise</Text>
      <Text style={styles.info}>4   Kulturelle opplevelser</Text>
      <Text style={styles.info}>5   Shopping</Text>
      <Text style={{paddingTop:40,textDecorationLine: 'underline' }}>Rediger informasjon</Text>

    </View> 
    
    <Image source={require('../../assets/icon2.png')} style={{ width: screenWidth, height: 400, margin: -20 }}/>
    <View style= {styles.bubble2}>
      <View style={{paddingBottom:20}}>
        <Text style={styles.white}>
        <Text style={styles.h2}>Preferanser for reisen</Text>
      </Text>
      </View>
      
      <Text style={styles.white}>
        <Text style={styles.info}>Verdensdeler</Text>
      </Text>
      
        <View style={styles.row}>
          {selectedRegions.map(region => (
            <View key= {region} style= {styles.selectedButton}>
              <Text style= {styles.selctedButtonText}>{region}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.white}>
        <Text style={styles.info}>Klima</Text>
        </Text>
        <View style={styles.row}>
          {selectedKlima.map(klima => (
            <View key= {klima} style= {styles.selectedButton}>
              <Text style= {styles.selctedButtonText}>{klima}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.white}>
          <Text style={styles.info}>Interesser</Text>
        </Text>
        
        <View style={styles.row}>
          {selectedInterest.map(interest => (
            <View key= {interest} style= {styles.selectedButton}>
              <Text style= {styles.selctedButtonText}>{interest}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.white}>
          <Text style={styles.info}>Land du ønsker å besøke</Text>
        </Text>
        
        <View style={styles.row}>
          {selectedCountries.map(countries => (
            <View key= {countries} style= {styles.selectedButton}>
              <Text style= {styles.selctedButtonText}>{countries}</Text>
            </View>
          ))}
        </View>
        <Text style={{paddingTop:40,textDecorationLine: 'underline', color:"white" }}>Rediger informasjon</Text>
        <Text style={{ padding: 20, fontSize: 16, textAlign: 'center',color:"white" }}>{serverResponse}</Text>
    </View>

    
    

      <View style={styles.bottomContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
            <Button 
                mode='outlined' 
                style= {{backgroundColor:"#465CA8", width: 400}}
                labelStyle={{color: "white"}}
                onPress={sendPreferencesToServer}
            >
                Generer reise →
            </Button>
        )}
        
         
         <Text style={styles.smalltext}>Destinasjonen blir ikke avslørt når reisen er generert.</Text>
      </View> 

  </ScrollView> //End container
  
  
    
  
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20, 
    paddingRight: 20, 
    backgroundColor: "#F1EEE4"
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'float left',
    paddingTop: 10,
    paddingBottom:20,
  },
  padbox:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:50,
  }, 

  button: {
    //margin: 4,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#75869B',
  },
  selectedButton: {
    backgroundColor: '#4A84DB',
    margin: 2,
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
    //borderColor: '#2B3D7D',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  selctedButtonText: {
    color: 'white',
    fontSize: 14,
  },
    //Text 
  header: {
    fontSize: 36,
    marginVertical: 20,
  },

  h1:{
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop:10,
  },
  h2: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    paddingBottom:10,
  },
  
  h3: {
    fontSize: 20,
  },
  
  info: {
    fontSize: 16,
    
  },

  smalltext:{
    fontSize: 12,
    padding: 20,
    color:"white",
  },
  
  body:{
    fontSize: 16,
    marginTop: 10,
  },

  bodybold:{
    fontSize: 16,
    fontWeight: 'bold',
  },

  white:{
    color:"white",
  },

// containers
  bubble1: {
    paddingLeft: 20, 
    paddingRight: 20,
    paddingBottom: 20,
    marginTop:-50,
    marginBottom: 30,
    borderRadius: 20,
  }, 

  bubble2: {
    paddingLeft: 20, 
    paddingRight: 20,
    paddingBottom: 20,
    marginLeft:-20,
    marginRight:-20,
    backgroundColor: "black",
   
    color: "white",
  },

  bottomContainer: {
    flex: 1, 
    justifyContent: 'flex-end', 
    paddingTop:50,
    paddingBottom: 50,
    alignItems: "center",
    backgroundColor:"black",
    marginLeft:-20,
    marginRight:-20,
    
  },



  
})

