import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Intro = ({navigation}) => {
  return (
    <View style={styles.Intro}>
      <Image
        source={require('../Assets/Online-Groceries-bro.png')}
        style={styles.IntroImg}
      />
      <Text style={styles.introTxt}>Find Your Grocery</Text>
      <Text style={styles.introPTxt}>
        Now no need worry if you want to shop your grocery. Find lots of
        groceries in minutes at your doorstep in few minutes.
      </Text>
      <TouchableOpacity
        style={styles.getBtn}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.getBtnTxt}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  Intro: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IntroImg: {
    width: '100%',
    height: 420,
  },
  introTxt: {
    fontSize: 32,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  introPTxt: {
    fontSize: 12,
    width: '80%',
    textAlign: 'center',
  },
  getBtn: {
    backgroundColor: '#2f2f2f',
    padding: 16,
    borderRadius: 12,
    marginTop: 32,
    width: '90%',
  },
  getBtnTxt: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
