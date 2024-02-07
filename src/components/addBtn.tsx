import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../styles/styles';

const AddBtn = ({eventHandler}: any) => {
  return (
    <TouchableOpacity style={styles.addBtnContainer} onPress={eventHandler}>
      <Icon name={'add'} size={30} color="black" />
    </TouchableOpacity>
  );
};

export default AddBtn;
