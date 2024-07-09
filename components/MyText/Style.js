import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const style = StyleSheet.create ({
  input: {
    borderColor : 'gray',
    margin : 15,
    padding : 10,
    height : 40,
    textAlign: 'center',
    fontSize: 20,
  },

  container: {
    position: 'absolute',
    top: (height - 300)/2,
    left: (width - 300)/2,
  },

  content: {
    padding: 20,
  },

  text: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default style;