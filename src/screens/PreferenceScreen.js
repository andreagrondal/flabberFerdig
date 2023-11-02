import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';

import * as Font from 'expo-font';



export default function PreferenceScreen({ navigation }) {
  /*
  async function loadCustomFont() {
    await Font.loadAsync({
      //'Noto Sans Regular': require('../../assets/fonts/Noto Sans Regular.ttf'),
      'Playfair Display Medium': require('../../assets/fonts/Playfair Display Medium.ttf'),
    });
  }
  loadCustomFont();
  */

  //searchbar
  const [searchText, setSearchText] = useState('');
  const allCountries = ['Norge ', 'Sverige ', 'Indonesia ', 'Slovenia ', 'Peru ', 'Thailand ', 'Italia ', 'Andorra ', 'Canada']
  const [filteredCountries, setFilteredCountries] = useState(allCountries);

  useEffect(() => {
    setFilteredCountries(
      allCountries.filter(country => 
        country.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleCountrySelect = (country) => {
    if (!selectedCountries.includes(country)) {
      setSelectedCountries([...selectedCountries, country]);
    }
    setSearchText('');
  };
  
  const handleCountryRemove = (countryToRemove) => {
    setSelectedCountries(selectedCountries.filter(country => country !== countryToRemove));
  };
  
  
  // Example for Verdensdeler section
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedKlima, setSelectedKlima] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  

  const toggleRegion = (region) => {
    setSelectedRegions(prev => {
      if (prev.includes(region)) {
        return prev.filter(r => r !== region);
      } else {
        return [...prev, region];
      }
    });
  };
  const toggleKlima = (klima) => {
    setSelectedKlima(prev => {
      if (prev.includes(klima)) {
        return prev.filter(r => r !== klima);
      } else {
        return [...prev, klima];
      }
    });
  };

  const toggleInterest = (interest) => {
    setSelectedInterest(prev => {
      if (prev.includes(interest)) {
        return prev.filter(r => r !== interest);
      } else {
        return [...prev, interest];
      }
    });
  };


  
  return (
    <ScrollView style={styles.container}>

      
        <Text style={styles.h1}>Dine preferanser</Text>
        <Text style={styles.info}>Her kan du legge til preferanser du vil jeg skal hensyn til når jeg planlegger turen din. Om du ikke har noen innvendinger, kan du hoppe over dette steget. </Text>
      <Text style={styles.bodybold}>Verdensdeler</Text>
      <View style={styles.row}>
        {['Nord Amerika', 'Sør Amerika', 'Europa', 'Asia', 'Afrika', 'Antarktis', 'Oseania'].map(region => (
          <TouchableOpacity key={region} style={[styles.button, selectedRegions.includes(region) && styles.selectedButton]} onPress={() => toggleRegion(region)}>
            <Text style={selectedRegions.includes(region) ? styles.selectedButtonText : styles.buttonText}>{region}</Text>
          </TouchableOpacity>
        ))}
        {/* Repeat for other regions */}
      </View>
      {/* Continue with other sections like Land du ønsker å besøke, Klima, etc. */}
      

      <Text style={styles.bodybold}>Klima</Text>
      <View style={styles.row}>
        {['Sol', 'Nordisk', 'Storby', 'Strand', 'Tropisk', 'Fjell', 'Landlig' ].map(klima => (
          <TouchableOpacity key={klima} style={[styles.button, selectedKlima.includes(klima) && styles.selectedButton]} onPress={() => toggleKlima(klima)}>
            <Text style={selectedKlima.includes(klima) ? styles.selectedButtonText : styles.buttonText}>{klima}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.bodybold}>Interesser</Text>
      <View style={styles.row}>
        {['Shopping', 'Kultur', 'Storby', 'Strandliv', 'Sightseeing', 'Mat', 'Aktiviteter', 'Uteliv', 'Adrenalin', 'Gamleby', 'Museer'].map(interest => (
          <TouchableOpacity key={interest} style={[styles.button, selectedInterest.includes(interest) && styles.selectedButton]} onPress={() => toggleInterest(interest)}>
            <Text style={selectedInterest.includes(interest) ? styles.selectedButtonText : styles.buttonText}>{interest}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.bodybold}>Land du ønsker å besøke</Text>
      <View style={styles.row}>
        <TextInput
          placeholder='🔎Søk etter land'
          value={searchText}
          onChangeText={setSearchText}
          style= {styles.searchbar}
        />
        {filteredCountries.slice(0, 5).map(country => (
          <TouchableOpacity key={country} onPress={() => handleCountrySelect(country)}>
            <Text>{country}</Text>
          </TouchableOpacity>
  ))}
        
      </View>
      <View style={styles.selectedCountriesContainer}>
        {selectedCountries.map(country => (
        <View key={country} style={styles.selectedCountryBox}>
          <Text style={styles.selectedCountriesText}>{country}</Text>
          <TouchableOpacity onPress={() => handleCountryRemove(country)}>
          <Text >✖️</Text> 
        </TouchableOpacity>
      </View>
  ))}
</View>

      <View style={styles.bottomContainer}>
         <Button 
            mode='outlined' 
            style= {{backgroundColor:"#465CA8", width: 400}}
            labelStyle={{color: "white"}}
            onPress={() => navigation.navigate("Summary", {
              selectedRegions: selectedRegions,
              selectedKlima: selectedKlima,
              selectedInterest:selectedInterest,
              selectedCountries: selectedCountries

            })} 
            >
            Gå videre til sammendrag →
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
    padding: 8,
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
      fontFamily: "Playfair Display Medium",
    },
  
    h1:{
      fontSize: 28,
      fontWeight: 'bold',
      paddingTop:10,
      paddingBottom:10,
      //fontFamily: "Noto Sans Regular",
      
    },
    h2: {
      fontSize: 24,
      marginTop: 20,
      fontWeight: 'bold',
      fontFamily: "Noto Sans Regular",
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
    paddingBottom: 500,
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
  }

    
   
  
});




