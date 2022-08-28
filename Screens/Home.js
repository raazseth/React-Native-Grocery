import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Layout from '../Components/Layout';
import Card from '../Components/Card';
import {Store} from '../Utils/Store';
import Input from '../Components/Input';
import TodoCard from '../Components/TodoCard';
import {colorData} from '../Utils/Data';
import moment from 'moment';

const Home = ({navigation}) => {
  const [title, settitle] = useState('');
  const [loading, setloading] = useState(false);
  const [color, setcolor] = useState('#fde9d1');
  const {state, dispatch} = useContext(Store);

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
          settitle('');
          setcolor('#fde9d1');
        }, 1800);
      }
    }
  };

  return (
    <Layout isHeader navigation={navigation} showOverlay={true}>
      <View>
        <View style={styles.OverlayBox}>
          <Text style={styles.headTxt}>Add To Your List</Text>
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

        <Text style={styles.headTxt2}>Your WatchList</Text>
        {state.ToDo.slice() //Reverse and Slice use for array to show recent added array objects
          .reverse()
          .map((todo, i) => (
            <View key={i}>
              <TodoCard todo={todo} />
            </View>
          ))}
        <Text style={styles.headTxt2}>Recommended</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {state.Items.map((item, i) => (
            <View key={i}>
              <Card item={item} />
            </View>
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Home;

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
  headTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#febd55',
    marginTop: 4,
    marginBottom: 'auto',
    marginLeft: 2,
    marginBottom: 10,
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
