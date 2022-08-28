import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Header = ({navigation}) => {
  return (
    <View style={styles.Header}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.searchSection, styles.boxShadowStyle]}
        onPress={() => navigation.navigate('Search')}>
        <Ionicons
          style={styles.searchIcon}
          name="search-outline"
          size={18}
          color="#bcbcbc"
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products"
          editable={false}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Add')}
        style={[styles.backgroundStyle, styles.boxShadowStyle]}>
        <Image
          source={require('../Assets/AddProduct.png')}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    padding: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
  },
  searchSection: {
    width: '82%',
    height: 42,
    marginRight: 'auto',
  },
  searchIcon: {
    padding: 10,
    paddingLeft: 15,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  searchInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#333',
    fontSize: 14,
  },
  backgroundStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    marginLeft: 'auto',
    width: 42,
    height: 42,
  },
  boxShadowStyle: {
    marginTop: 'auto',
    marginBottom: 'auto',
    shadowColor: '#333',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 50,
  },
});
