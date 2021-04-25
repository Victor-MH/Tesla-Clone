import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Appearance, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const colorScheme = Appearance.getColorScheme();
  console.log(colorScheme);  

  Appearance.addChangeListener()

  return (
    <View style={styles.container}>
      
      <View style={styles.carContainer}>
        <ImageBackground
          source={require('./assets/ModelS.jpeg')}
          style={styles.imageBackground}
        />
        <LinearGradient
          colors={['black', '#0000']}
          start={{
            x: 0.5,
            y: 0
          }}
          end={{
            x: 0.5,
            y: 1
          }}
          style={{width:'100%'}}
        >
          <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.price}>Starting at $69,420</Text>
          </View>
          
        </LinearGradient>
      </View>


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
  carContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titles: {
    paddingTop: '25%',
    paddingBottom: '15%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    // color: Appearance.getColorScheme()==='dark' ? 'black' : 'white' ,
    color: '#000'
  },
  price: {
    fontSize: 16,
    color: '#5C5E62'
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }
});
