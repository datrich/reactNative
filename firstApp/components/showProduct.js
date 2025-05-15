import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ShowProduct({name, brand, price, image}) {
    return (
        <View>
            <View style={styles.product}>
                <Image
                source={image}
                style={styles.image}
                />
                <View style={styles.name_align}>
                    <Text style={styles.brand_product}>{brand}</Text>
                    <Text style={styles.name_product}>{name}</Text>
                    <Text style={styles.price_product}>{price}</Text>
                </View>
                <View style={styles.box_add_rev}>
                    <View style={styles.add_rev}>
                        <TouchableOpacity >
                            <Text style={styles.text_add_rev}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.text_quan}>   2   </Text>
                        <TouchableOpacity>
                            <Text style={styles.text_add_rev}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text> </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  product: {
    alignItems: 'center',
    paddingLeft : 10,
    flexDirection: 'row',
    width: 335,
    height: 85,
    backgroundColor: '#F8F8FB',
    borderRadius: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  name_align: {
    paddingLeft : 20,
    flexDirection: 'column',
    backgroundColor: '#F8F8FB',
  },
  brand_product: {
    paddingBottom : 5,
    color: '#B1B1B1',
    fontSize: 10,
  },
  name_product: {
    width: 100,
    backgroundColor: '##F8F8FB',
    paddingBottom : 5,
    color: '#494949',
    fontSize: 14,
  },
  price_product: {
    color: '#F08F5F',
    fontSize: 18,
  },
  add_rev: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 67,
    height: 25,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  box_add_rev: {
    flexDirection: 'row',
    paddingLeft: 70,
    paddingTop : 40,
  },
  box_check_out: {
    paddingTop: 20,
    width: 335,
    height: 62,
    backgroundColor: '#F08F5F',
    borderRadius: 16,
  },
  text_add_rev: {
    fontWeight: '250',
    fontSize: 24,
    color: '#F08F5F',
  },
  text_quan: {
    paddingTop: 3,
    fontSize: 10,
    color: '#363636',
  },
});