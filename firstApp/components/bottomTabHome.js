import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BottomTabHome() {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
          <View  style={styles.product}>
              <TouchableOpacity style={[styles.iconBorder, { backgroundColor: '#D0EDFBCC'}]} onPress={() => navigation.replace('Home', { animation: 'none' })}>
                  <Image
                  source={require('../assets/home.png')}
                  style={styles.image}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.iconBorder, { padding: 80}]} onPress={() => navigation.replace('Qr', { animation: 'none' })}>
                  <Image
                  source={require('../assets/scan.png')}
                  style={styles.image}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBorder} onPress={() => navigation.replace('Cart', { animation: 'none' })}>
                  <Image
                  source={require('../assets/cart.png')}
                  style={styles.image}
                  />
              </TouchableOpacity>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  product: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 118,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 5,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  iconBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 16,
  },
});
