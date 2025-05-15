import React from 'react';
import {View, ImageBackground, StyleSheet, Image} from 'react-native';
import RecProduct from '../components/recProduct';


const Qr = () => {
    const background = require('../assets/Rectangle_34.png');
    return (
    <View style={styles.container} edges={['left', 'right']}>
        <ImageBackground source={background} resizeMode="cover" style={styles.image}>
            <View style={{paddingTop: 170}}>
                <Image
                    source={require('../assets/Group.png')}
                    style={styles.qrScan}
                />
            </View>
            <View style={{paddingTop: 30}}>
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
  image: {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  showProduct: {
    width: 292,
    height: 82,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
  qrScan: {
    width: 320,
    height: 510,
    resizeMode: 'contain'
  },
});
export default Qr;