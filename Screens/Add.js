import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Input from '../Components/Input';
import Layout from '../Components/Layout';
import {ImageDate} from '../Utils/Data';
import {Store} from '../Utils/Store';

const Add = ({navigation}) => {
  const {state, dispatch} = useContext(Store);
  const [title, settitle] = useState('');
  const [price, setprice] = useState('');
  const [unit, setunit] = useState('Kg');
  const [img, setimg] = useState(
    'https://res.cloudinary.com/doqz6idk4/image/upload/v1641925846/Grocery/LcAvMEYOw-Potato.jpg.jpg',
  );
  const [loading, setloading] = useState(false);

  const handleUnit = Unit => {
    if (Unit === unit) {
      setunit('');
    } else {
      setunit(Unit);
    }
  };

  const handleImage = Img => {
    if (Img === img) {
      setimg('');
    } else {
      setimg(Img);
    }
  };

  const SaveItem = () => {
    if (!loading) {
      if (title === '') {
        Alert.alert('Enter Title');
      } else if (price === 0 || price === '') {
        Alert.alert('Enter Price');
      } else if (unit === '') {
        Alert.alert('Choose Unit');
      } else if (img === '') {
        Alert.alert('Choose Image');
      } else {
        setloading(true);
        const data = {
          title,
          price,
          img,
          unit,
        };
        dispatch({
          type: 'ADD_TO_ITEM_LIST',
          payload: {
            Items: [...state.Items, data],
          },
        });
        setTimeout(() => {
          setloading(false);
          navigation.navigate('Home');
        }, 2500);
      }
    }
  };

  return (
    <Layout isHeader={true} navigation={navigation} showOverlay={true}>
      <View style={styles.OverlayBox}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {ImageDate.map(Img => (
            <TouchableOpacity
              key={Img}
              activeOpacity={0.8}
              onPress={() => handleImage(Img)}>
              <Image
                source={{uri: Img}}
                style={[
                  styles.ChooseImg,
                  {borderColor: Img === img ? '#009baf' : 'transparent'},
                ]}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Input
          label="Title"
          value={title}
          onChange={text => settitle(text)}
          placeholder="Enter Product Title"
        />
        <Input
          label="Price"
          value={price}
          onChange={text => setprice(text)}
          placeholder="Enter Product Price"
          type="decimal-pad"
        />
        <View style={{display: 'flex', flexDirection: 'row'}}>
          {['Kg', '500G', '250G'].map(Unit => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={Unit}
              style={[
                styles.UnitBox,
                {backgroundColor: Unit === unit ? '#f4fafd' : 'transparent'},
              ]}
              onPress={() => handleUnit(Unit)}>
              <Text style={styles.UnitTxt}>{Unit}</Text>
            </TouchableOpacity>
          ))}
        </View>

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
  ChooseImg: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 16,
    borderRadius: 18,
    borderWidth: 1,
    marginRight: 10,
  },
  UnitBox: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#009baf',
    padding: 4,
    width: 60,
    marginRight: 10,
  },
  UnitTxt: {
    color: '#009baf',
    paddingLeft: 4,
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
});
