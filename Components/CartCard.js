import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CartCard = ({item}) => {
  return (
    <View style={styles.Card}>
      <Image
        style={styles.Thumbnail}
        source={{
          uri: item.img,
        }}
      />
      <View style={{paddingLeft: 10, marginTop: 'auto', marginRight: 'auto'}}>
        <Text style={styles.itemName}>{item.title}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <FontAwesome
            name="rupee"
            size={15}
            color="#009baf"
            style={styles.inr}
          />
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text style={styles.itemUnit}>{item.unit}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  Card: {
    width: '100%',
    height: 78,
    borderRadius: 24,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    marginTop: 6,
    marginBottom: 6,
  },
  Thumbnail: {
    width: '30%',
    height: 68,
    resizeMode: 'contain',
  },
  inr: {marginTop: 8, marginBottom: 'auto', marginRight: 1},
  itemName: {
    fontWeight: '600',
    color: '#333',
    fontSize: 18,
  },
  itemPrice: {
    color: '#009baf',
    fontWeight: 'bold',
    fontSize: 24,
  },
  itemUnit: {
    fontSize: 14,
    marginLeft: 2,
    color: 'gray',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
