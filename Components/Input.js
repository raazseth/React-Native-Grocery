import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';

const Input = ({value, onChange, label, placeholder, type}) => {
  const [isFocused, setisFocused] = useState(false);

  const handleFocus = () => setisFocused(true);
  const handleBlur = () => setisFocused(false);

  return (
    <View
      style={[styles.Input, {borderColor: isFocused ? '#11a5b5' : '#e1f7f8'}]}>
      <Animatable.Text
        animation={isFocused ? 'fadeInDown' : ''}
        duration={400}
        style={[styles.InputLabel, {color: isFocused ? '#11a5b5' : 'gray'}]}>
        {label}
      </Animatable.Text>
      <TextInput
        style={styles.InputField}
        onChangeText={onChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        keyboardType={type ? type : 'default'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  InputLabel: {
    fontSize: 12,
  },
  InputField: {
    fontSize: 18,
    margin: 0,
    padding: 0,
    color: '#5e5e5e',
    fontWeight: '600',
  },
});
