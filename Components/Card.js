import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Store} from '../Utils/Store';

const Card = ({item}) => {
  const {state, dispatch} = useContext(Store);

  const handleCartBtn = () => {
    // console.log("Function Will Work Later!")

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: {
        cart: [...state.cart, item],
        total: state.total + Number(item.price),
      },
    });
  };

  return (
    <View style={styles.Card}>
      <Image
        style={styles.Thumbnail}
        source={{
          uri: item.img,
        }}
      />
      <View style={styles.CartBox}>
        <Text style={styles.itemName}>{item.title}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <FontAwesome
            name="rupee"
            size={13}
            color="#009baf"
            style={styles.inr}
          />
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text style={styles.itemUnit}>{item.unit}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.CartBtn}
          onPress={handleCartBtn}>
          <Ionicons name="add" size={24} style={{marginLeft: 1}} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  Card: {
    width: 150,
    height: 220,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 12,
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 12,
    marginTop: 4,
    marginBottom: 10,
  },
  Thumbnail: {
    width: 136,
    height: 140,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 8,
    borderRadius: 16,
    resizeMode: 'contain',
  },
  inr: {marginTop: 3.5, marginBottom: 'auto', marginRight: 1},
  itemName: {
    fontWeight: '600',
    marginTop: 'auto',
    marginBottom: 1,
    color: '#333',
    fontSize: 16,
  },
  itemPrice: {
    color: '#009baf',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemUnit: {
    fontSize: 11.5,
    marginLeft: 2,
    color: 'gray',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  CartBox: {
    backgroundColor: '#f4fafd',
    padding: 6,
    borderRadius: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  CartBtn: {
    position: 'absolute',
    right: 0,
    marginTop: 13,
    backgroundColor: '#009baf',
    paddingLeft: 4,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
});
