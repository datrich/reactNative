import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ShowProduct from '../components/showProduct';
import BottomTabCart from '../components/bottomTabCart';

const Cart = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff',}}>
        <View style={{paddingTop: 60, paddingLeft: 30, marginBottom: 40}}>
            <TouchableOpacity style={styles.iconBorder} onPress={() => navigation.navigate('Home', { animation: 'none' })}>
                <Image
                source={require('../assets/arrow2.png')}
                style={styles.backButton}
                />
            </TouchableOpacity>
        </View>
        <Text style={styles.title}>Your Cart 👍🏻</Text>
        <View style={styles.container}>
            <ShowProduct name="Juice" brand="Twister" price="$10" image={require('../assets/Rectangle_31.png')}/>
            <ShowProduct name="Lotion" brand="Wonjin" price="$20" image={require('../assets/Rectangle_32.jpeg')}/>
            <ShowProduct name="Milk" brand="Vinamilk" price="$5" image={require('../assets/Rectangle_33.jpeg')}/>
            <View style={{flexDirection: 'row',}}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total_price}>$70</Text>
            </View>
            <TouchableOpacity style={styles.box_check_out}>
                <Text style={{fontSize: 20, fontWeight: 700, color: "#FFFFFF"}}>Proceed to checkout</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        },
    title: {
        paddingLeft: 30,
        paddingBottom: 50,
        color: '#000000',
        fontSize: 22,
        fontWeight: 700,
    },
    total: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 700,
        paddingTop: 30,
        paddingBottom: 45,
    },
    total_price: {
        paddingTop: 30,
        paddingLeft: 230,
        fontWeight: '600',
        color: '#F08F5F',
        fontSize: 18,
    },
    box_check_out: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 335,
        height: 62,
        backgroundColor: '#F08F5F',
        borderRadius: 16,
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
        backgroundColor: '#F8F8FB'
    },
});
export default Cart;
