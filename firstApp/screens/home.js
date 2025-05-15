import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ShowFeature from '../components/showFeature';

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row',}}>
            <View>
                <Text style={{paddingTop: 80, color: '#363636', paddingLeft: 20, fontSize: 20, fontWeight: '700',}}>Hello 👋🏻</Text>
                <Text style={{color: '#363636', paddingLeft: 20, fontSize: 16, fontWeight: '400', paddingBottom: 70,}}>Tuan Dat</Text>
            </View>
            <View style={styles.imageBorder}>
                <Image
                    source={require('../assets/profileImg.jpg')}
                    style={styles.image}
                />
            </View>
        </View>
        <Text style={{color: '#363636', paddingLeft: 20, fontSize: 18, fontWeight: '500', paddingBottom: 40,}}>Your Insights</Text>
        <View style={{flexDirection: 'row',}}>
            <View style={{paddingLeft: 20,}}>
                <ShowFeature icon={require('../assets/icon_scan.png')} feature="Scan New" detail="Scanned 483" color='#DBDAF7'/>
            </View>
            <View style={{paddingLeft: 32,}}>
                <ShowFeature icon={require('../assets/icon_caution.png')} feature="Counterfeits" detail="Counterfeits 32" color='#F6E3DB'/>
            </View>
        </View>
        <View style={{flexDirection: 'row',}}>
            <View style={{paddingLeft: 20,}}>
                <ShowFeature icon={require('../assets/icon_success.png')} feature="Success" detail="Checkouts 8" color='#D8F3F1'/>
            </View>
            <View style={{paddingLeft: 32,}}>
                <ShowFeature icon={require('../assets/icon_schedule.png')} feature="Directory" detail="History 26" color='#D0EDFB'/>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        },
    title: {
        paddingTop: 80,
        paddingLeft: 20,
        color: '#363636',
        fontSize: 22,
        fontWeight: '700',
    },
    name: {
        color: '#363636',
        paddingLeft: 20,
        fontSize: 16,
        fontWeight: '400',
        paddingBottom: 70,
    },
    image: {
        width: 46,
        height: 46,
        borderRadius: 12,
      },
    imageBorder: {
        paddingTop: 80,
        paddingLeft: 230,
    }
});
export default Home;
