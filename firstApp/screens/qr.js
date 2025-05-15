import React from 'react';
import {View, ImageBackground, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import RecProduct from '../components/recProduct';


const Qr = ({navigation}) => {
    const background = require('../assets/Rectangle_34.png');
    return (
    <View style={styles.container}>
        <ImageBackground source={background} resizeMode="cover" style={{flex: 1}}>
            <View style={{paddingTop: 60, paddingLeft: 30}}>
                <TouchableOpacity style={styles.iconBorder} onPress={() => navigation.navigate('Home', { animation: 'none' })}>
                    <Image
                    source={require('../assets/arrow2.png')}
                    style={styles.backButton}
                    />
                </TouchableOpacity>
            </View>
            <View style={{paddingTop: 60, alignItems: 'center'}}>
                <Image
                    source={require('../assets/Group.png')}
                    style={styles.qrScan}
                />
            </View>
            <View style={{paddingTop: 30, alignItems: 'center'}}>
            <RecProduct name="Juice" brand="Twister" image={require('../assets/Rectangle_31.png')}/>
            </View>
        </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  qrScan: {
    width: 320,
    height: 510,
    resizeMode: 'contain'
  },
  backButton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  iconBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 9,
    backgroundColor: '#FFFFFF'
  },
});
export default Qr;