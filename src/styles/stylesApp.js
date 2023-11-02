import { StyleSheet } from 'react-native';
import {useFonts, NotoSans_400Regular} from '@expo-google-fonts/noto-sans'

//bruk denne i filen du vil bruke dem 
//import styles from '../styles/PreferenceScreenStyles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
     
    },

    regularText: {
      fontFamily: 'NotoSans_400Regular',
      

    }

     
    
  });
  
  export default styles;