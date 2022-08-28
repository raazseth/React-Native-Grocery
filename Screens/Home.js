import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import Layout from '../Components/Layout';
import Card from '../Components/Card';
import {Store} from '../Utils/Store';
import Carousel from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const renderSliderItem = ({item}) => {
  return <Image source={item.img} style={styles.BannerImg} />;
};

const Home = ({navigation}) => {
  const {state, dispatch} = useContext(Store);

  const Banners = [
    {img: require('../Assets/12130.jpg')},
    {img: require('../Assets/28051.jpg')},
    {img: require('../Assets/65481.png')},
  ];

  console.log(state);
  return (
    <Layout isHeader navigation={navigation} showOverlay={true}>
      <View>
        <View style={styles.OverlayBox}>
          <Carousel //Using react-native-snap-carousel for slideshow of banners
            data={Banners}
            renderItem={renderSliderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
          />
        </View>
        {state.cart.length > 0 ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            activeOpacity={0.8}
            style={styles.cartCard}>
            <Image
              source={require('../Assets/carts.png')}
              style={{width: 24, height: 24}}
            />
            <Text style={styles.cartCardTxt}>
              You have {state.cart.length} item in your cart!
            </Text>
          </TouchableOpacity>
        ) : null}
        <View style={styles.Trend}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/doqz6idk4/image/upload/v1661598560/Grocery/flash-sale_qmt3dp.png',
            }}
            style={{width: 22, height: 22}}
          />
          <Text style={styles.headTxt}>Trending This Week</Text>
        </View>
        <ScrollView horizontal>
          {state.Items.map((item, i) => (
            <View key={i}>
              <Card item={item} />
            </View>
          ))}
        </ScrollView>
        <Text style={styles.headTxt2}>Recently Added</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {state.Items.slice() //Reverse and Slice use for array to show recent added array objects
            .reverse()
            .map((item, i) => (
              <View key={i}>
                <Card item={item} />
              </View>
            ))}
        </View>
      </View>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  OverlayBox: {
    height: 'auto',
    backgroundColor: 'transparent',
    marginTop: -120,
    width: '94%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
  },
  headTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#febd55',
    marginTop: 4,
    marginBottom: 'auto',
    marginLeft: 2,
  },
  headTxt2: {
    marginLeft: 14,
    fontSize: 18,
    marginBottom: 8,
    marginTop: 8,
    color: '#383836',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  BannerImg: {
    width: '100%',
    height: 182,
    borderRadius: 8,
    resizeMode: 'contain',
    marginRight: 60,
    backgroundColor: '#f4fafd',
  },
  Trend: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 12,
    marginTop: 6,
  },
  cartCard: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#fff6f7',
    borderColor: '#F38EAD',
    padding: 7,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 4,
    marginBottom: 4,
  },
  cartCardTxt: {
    fontWeight: 'bold',
    color: '#F38EAD',
    fontSize: 18,
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 6,
    fontStyle: 'italic',
  },
});
