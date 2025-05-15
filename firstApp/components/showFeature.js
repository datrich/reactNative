import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ShowFeature({icon, feature, detail, color}) {
    return (
        <View>
            <TouchableOpacity style={styles.product}>
                <View style={[styles.iconBorder, { backgroundColor: color}]}>
                    <Image
                    source={icon}
                    style={styles.image}
                    />
                </View>
                <Text style={{paddingTop: 10, fontWeight: '500', fontSize: 16, color: '#363636'}}>{feature}</Text>
                <Text style={{paddingTop: 10, fontWeight: '700', fontSize: 10, color: '#B7B7C1'}}>{detail}</Text>
            </TouchableOpacity>
            <Text> </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  product: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 158,
    height: 176,
    backgroundColor: '#F8F8FB',
    borderRadius: 16,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  iconBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    borderRadius: 16,
  },
});