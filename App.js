import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Appearance, StyleSheet, Text, View } from 'react-native';
// Components
import CarItem from './components/CarItem';
import modelS from './assets/ModelS.jpeg'

export default function App() {

  // const colorScheme = Appearance.getColorScheme();
  // console.log(colorScheme);  

  // Appearance.addChangeListener()

  return (
    <View style={styles.container}>

      {/* <CarItem
        title='Model S'
        subtitle='Starting at $69,420'
        backImg={modelS}
      /> */}

      <CarItem
        title='Model S'
        subtitle='Order online for'
        cta='Touchless delivery'
        backImg={modelS}
      />
      
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
