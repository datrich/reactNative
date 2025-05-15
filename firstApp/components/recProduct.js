import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RecProduct({name, brand, image}) {
    const navigation = useNavigation();
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
                </View>
                <View style={styles.box_add_rev}>                 
                        <TouchableOpacity style={styles.add_rev} onPress={() => navigation.navigate('Cart', { animation: 'none' })}>
                        <View
                            style={{
                                height: 10,
                                borderLeftColor: '#FFFFFF',
                                borderLeftWidth: 2,
                            }}
                        />
                        <View
                            style={{
                                width: 20,
                                borderTopColor: '#FFFFFF',
                                borderTopWidth: 2,
                            }}
                        />
                        <View
                            style={{
                                height: 10,
                                borderLeftColor: '#FFFFFF',
                                borderLeftWidth: 2,
                            }}
                        />
                        </TouchableOpacity>
                </View>
            </View>
            <Text> </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  product: {
    alignItems: 'center',
    paddingLeft : 15,
    flexDirection: 'row',
    width: 292,
    height: 82,
    backgroundColor: '#F8F8FB',
    borderRadius: 16,
    shadowColor: '#AD6C48',
    shadowOpacity: 1,
    shadowRadius: 60,
    elevation: 5,
  },
  image: {
    width: 52,
    height: 52,
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
    fontSize: 12,
  },
  name_product: {
    width: 100,
    backgroundColor: '##F8F8FB',
    paddingBottom : 5,
    color: '#494949',
    fontSize: 16,
  },
  add_rev: {
    paddingTop: 13,
    alignItems: 'center',
    width: 44,
    height: 44,
    backgroundColor: '#5A6CF3',
    borderRadius: 11,
  },
  box_add_rev: {
    paddingLeft: 40,
  },
});