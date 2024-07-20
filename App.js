import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import MyText from './components/MyText/MyText';
import TimeOfDay from './components/TimeOfDay/TimeOfDay';

const App = () => {
  const [dialogVisible, setDialogVisible] = useState(true);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    setDialogVisible(true);
  }, []);

  const handleDialogClose = (name) => {
    setDialogVisible(false);
    setDisplay(name);
  };

  const handleTextClick = () => {
    alert('You just pressed the text component')
  };

  return (
    <SafeAreaView style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'red'}} onPress = {() => handleTextClick()}>
    <TimeOfDay name={display} />
    </Text>
    {dialogVisible && <MyText visible = {dialogVisible} onClose = {handleDialogClose} />}
    </SafeAreaView>
  );
};



export default App;















