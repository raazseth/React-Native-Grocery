import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import Header from '../Components/Header';
import {Store} from '../Utils/Store';
import CartCard from '../Components/CartCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Cart = ({navigation}) => {
  const {state, dispatch} = useContext(Store);

  return (
    <View
      style={{height: '100%', position: 'relative', backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} />
        <View style={styles.ItemList}>
          {state.cart.length > 0
            ? state.cart.map((item, i) => (
                <View key={i}>
                  <CartCard item={item} />
                </View>
              ))
            : null}
        </View>
      </ScrollView>
      <View style={styles.bottomCart}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}>
          <Text
            style={{
              marginTop: 'auto',
              marginRight: 8,
              marginTop: 'auto',
              marginBottom: 6,
            }}>
            Subtotal
          </Text>
          <Text
            style={{
              color: '#009baf',
              fontWeight: 'bold',
              fontSize: 36,
              marginTop: 12,
            }}>
            <FontAwesome
              name="rupee"
              size={22}
              color="#009baf"
              style={styles.inr}
            />
            {state.total.toFixed(0)}
          </Text>
        </View>
        <TouchableOpacity style={styles.SaveBtn} activeOpacity={0.8}>
          <Text style={styles.SaveBtnTxt}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  ItemList: {
    marginBottom: 10,
    width: '95%',
    padding: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    // backgroundColor:"#f4fafd",
    // borderWidth: 1,
    // borderRadius: 8,
    // borderColor: '#009baf',
    marginTop:10
  },
  SaveBtn: {
    backgroundColor: '#2f2f2f',
    marginLeft: 'auto',
    borderRadius: 28,
    width: 190,
  },
  SaveBtnTxt: {
    color: '#fff',
    fontSize: 21,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  bottomCart: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    height: 74,
    width: '96%',
    marginRight: '2%',
    marginLeft: '2%',
    shadowColor: 'gray',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 12,
    padding: 8,
    borderRadius: 24,
    bottom: 10,
    backgroundColor: '#fff',
  },
});
