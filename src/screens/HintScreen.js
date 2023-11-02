import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, ActivityIndicator, Image } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';


export default function HintScreen({navigation}) {
    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer2, setShowAnswer2] = useState(false);
    const [showAnswer3, setShowAnswer3] = useState(false);
    const [showAnswer4, setShowAnswer4] = useState(false);
    const [showValue, setShowValue] = useState(false);
    const { width: screenWidth } = Dimensions.get('window');

        

    


    return (
        <ScrollView style = {styles.container}>
         
            <Text style={styles.header}>Blåtur</Text> 
            <Text>Vil du få et hint om din destinasjon? Klikk en boks.</Text>
           
                
                <Button style={styles.button} buttonColor="white" title="Hint1" 
                onPress={() => setShowAnswer1(prev => !prev)}>Hvilket land skal jeg besøke? </Button>
                {showAnswer1? <Text style={styles.answer}>Du skal til Spania</Text> : null}

                
                <Button style={styles.button} buttonColor="white" title="Hint2" 
                onPress={() => setShowAnswer2(prev => !prev)}>Hvilken by skal jeg besøke? </Button>
                {showAnswer2? <Text style={styles.answer}>Du skal til en storby</Text> : null}
        
                <Button style={styles.button} buttonColor="white" title="Hint2" 
                onPress={() => setShowAnswer3(prev => !prev)}>Hvordan er klimaet der jeg skal? </Button>
                {showAnswer3? <Text style={styles.answer}>Det er varmt og lite regn, 23 grader nå.</Text> : null}

        
        
                <Button style={styles.button} buttonColor="white" title="Hint2" 
                onPress={() => setShowValue(!showValue)}> Hvor skal jeg bo?</Button>
                {showValue? <Text style={styles.answer}> På hotell</Text> : null}

                <Button style={styles.button} buttonColor="white" title="Hint2" 
                onPress={() => setShowAnswer4(prev => !prev)}> Hva skal jeg pakke?</Button>
                {showAnswer4? <Text style={styles.answer}> Solkrem, badetøy og klær til ca. 20 grader</Text> : null}

                


                <Image source={require('../../assets/icon3.png')} style={{ width: screenWidth, height: 200, margin: -20, marginTop: 50, marginBottom:-50 }}/>
              
              <View style={styles.bottomContainer}> 
                <Button 
                  mode='outlined' 
                  style= {{backgroundColor:"#465CA8", width: 300}}
                  labelStyle={{color: "white"}}
                  onPress={() => navigation.navigate("Dagsplan")} 
                  >
                  chat →
                </Button>
              </View>




            
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
      fontSize: 36,
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
    
  //knapp nederst  
  bottomContainer: {
    flex: 1, 
    justifyContent: 'flex-end', 
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: "center",
        
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
});