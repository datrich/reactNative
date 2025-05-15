import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ShowProduct from '../components/showProduct';

const Cart = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Your Cart 👍🏻</Text>
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
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 8,
        },
    title: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 700,
        paddingBottom: 70,
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
});
export default Cart;
