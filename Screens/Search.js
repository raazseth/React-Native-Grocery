import {Image, StyleSheet, TextInput, View} from 'react-native';
import React, {useContext, useState} from 'react';
import Layout from '../Components/Layout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../Components/Card';
import {Store} from '../Utils/Store';

const Search = ({navigation}) => {
  const {state, dispatch} = useContext(Store);
  const [Search, setSearch] = useState('');
  const filterData = state.Items.filter(
    item => item.title.toLocaleLowerCase() === Search.toLocaleLowerCase(),
  ); //Filtering data with search input

  return (
    <Layout isHeader={false} navigation={navigation} showOverlay={false}>
      <View style={[styles.searchSection, styles.boxShadowStyle]}>
        <Ionicons
          style={styles.searchIcon}
          name="search-outline"
          size={19}
          color="#bcbcbc"
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products"
          value={Search}
          onChangeText={Text => setSearch(Text)}
        />
        {Search ? (
          <Ionicons
            onPress={() => setSearch('')}
            style={styles.searchIcon}
            name="close"
            size={19}
            color="#bcbcbc"
          />
        ) : null}
      </View>
      {Search && filterData.length > 0 ? (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {filterData.map((item, i) => (
            <View key={i}>
              <Card item={item} />
            </View>
          ))}
        </View>
      ) : (
        <Image
          source={require('../Assets/Browsing-Online.png')}
          style={{width: '100%', height: 300, marginTop: 70}}
        />
      )}
    </Layout>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchSection: {
    width: '96%',
    height: 42,
    marginRight: 'auto',
    marginLeft: 'auto',
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
    paddingRight: 0,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#333',
    fontSize: 16,
  },
  boxShadowStyle: {
    marginTop: 10,
    marginBottom: 10,
    shadowColor: 'gray',
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
