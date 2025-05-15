import { Text, SafeAreaView, StyleSheet } from 'react-native';

// or any files within the Snack
import Cart from './screens/cart';
import Qr from './screens/qr';
import Home from './screens/home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Qr/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      },
    });