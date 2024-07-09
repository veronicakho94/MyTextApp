import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import style from './Style';

const MyText = ({ visible, onClose }) => {
  const [name, setName] = useState('');
  const handleButtonPress =() => {
    onClose(name);
  }

  return (
  <View style = {style.container}>
    <View style = {style.content}>
     <Text style = {style.text}>What is your name?</Text>
     <TextInput style = {style.input} onChangeText = {setName} value = {name} />
     <Button title = 'Enter' onPress = {handleButtonPress} />
    </View>
  </View>
  );
};

MyText.propTypes = {
  onClose : PropTypes.func.isRequired,
};

export default MyText;
















