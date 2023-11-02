import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';


export default function GenererDagsplan({navigation}) {
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState(''); // For å lagre svaret fra GPT-3

    const handleGeneratePlan = async () => {
        try {
            // Send input til backend for å få svar fra GPT-3 ved bruk av fetch
            const response = await fetch(`http://10.111.16.10:4040/${inputValue}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify({ input: inputValue })
                
            });
            const svar = await response.json();
            console.log(svar)
            if (!response.ok) {
                throw new Error('Nettverksrespons var ikke ok');
            } 
            // Konverter responsen til JSON
            //const result = await response;
            setResponse(svar);
        
            
        } catch (error) {
            console.error("Feil ved henting av svar:", error);
        }
        
    };
    
    return(
        <ScrollView style={styles.container}>
            <Text style = {styles.header}>Generer Dagsplan</Text>
            <Text style={styles.h2}>Hva vil du gjøre i dag?</Text>

            <TextInput 
                style={styles.input}
                placeholder="Skriv her..."
                value={inputValue}
                onChangeText={setInputValue}
                multiline={true}
            />

            <TouchableOpacity style={styles.button} onPress={handleGeneratePlan}>
                <Text style={styles.buttonText}>Generer dagsplan</Text>
            </TouchableOpacity>
            <Text style={styles.responseText}>{response}</Text>

            <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate("Dagsplan")}>
                <Text style={styles.buttonTextNy}>Aksepter forslag</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomContainerNy} onPress={() => navigation.navigate("Dagsplan")}>
                <Text style={styles.buttonText}>Nytt forslag</Text> 
            </TouchableOpacity>

            
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
  //texst
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
    fontWeight: 'normal',
  },
  input: {
    height: 150,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top'
  },
  buttonText: {
    color: '#000',
    fontSize: 16
  },
  buttonTextNy: {
    color: '#2B3D7D',
    fontSize: 16
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
    borderWidth: 1, 
    borderRadius: 8,
    borderColor: '#2B3D7D',
  },
  //knappen med stiplet linje
  bottomContainerNy: {
    flex: 1, 
    justifyContent: 'flex-end', 
    paddingTop: 20,
    paddingBottom: 20,
    margin: 4,
    alignItems: "center",
    backgroundColor:"#F1EEE4",
    borderWidth: 1, 
    borderRadius: 8,
    borderColor: '#000',
    borderStyle: 'dashed',
  },
  

});