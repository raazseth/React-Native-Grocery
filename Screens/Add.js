import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Input from '../Components/Input';
import Layout from '../Components/Layout';
import {Store} from '../Utils/Store';
import {colorData} from '../Utils/Data';
import moment from 'moment';

const Add = ({navigation}) => {
  const {state, dispatch} = useContext(Store);
  const [title, settitle] = useState('');
  const [color, setcolor] = useState('#fde9d1');
  const [loading, setloading] = useState(false);

  const SaveItem = () => {
    if (!loading) {
      if (title === '') {
        Alert.alert('Enter Title');
      } else if (color === '') {
        Alert.alert('Choose Color');
      } else {
        setloading(true);
        const data = {
          title,
          color,
          createdAt: moment().format(),
        };
        setTimeout(() => {
          dispatch({
            type: 'ADD_TO_DO_LIST',
            payload: {
              ToDo: [...state.ToDo, data],
            },
          });
          setloading(false);
          navigation.navigate('Home');
          settitle('');
          setcolor('#fde9d1');
        }, 1800);
      }
    }
  };

  return (
    <Layout isHeader={true} navigation={navigation} showOverlay={true}>
      <View style={styles.OverlayBox}>
        <Input
          label="Title"
          value={title}
          onChange={text => settitle(text)}
          placeholder="Enter Title"
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {colorData.map(Color => (
            <TouchableOpacity
              key={Color}
              activeOpacity={0.5}
              onPress={() => setcolor(Color)}
              style={[
                styles.colorData,
                {
                  borderColor: Color === color ? '#333' : 'transparent',
                  backgroundColor: Color,
                },
              ]}
            />
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={SaveItem}
          activeOpacity={0.8}
          style={styles.SaveBtn}>
          {loading ? (
            <ActivityIndicator size="small" color="#febd55" />
          ) : (
            <Text style={styles.SaveBtnTxt}>Save Item</Text>
          )}
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Add;

const styles = StyleSheet.create({
  OverlayBox: {
    height: 'auto',
    backgroundColor: 'white',
    marginTop: -120,
    width: '94%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    borderRadius: 12,
    shadowColor: 'gray',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
    marginBottom: 10,
  },
  SaveBtn: {
    backgroundColor: '#2f2f2f',
    padding: 16,
    borderRadius: 12,
    marginTop: 32,
  },
  SaveBtnTxt: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  colorData: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 1,
    marginRight: 6,
    marginLeft: 6,
  },
});
