import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, TextInput} from 'react-native';
import {View} from 'react-native';
import {styles} from '../styles/styles';

const EditNotes = () => {
  const [note, setNote] = useState('');
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Text>Add Text!!!!</Text>
        <TextInput
          // style={styles.noteInput}
          placeholder="Edit Notes"
          multiline={true}
          value={note}
          onChangeText={text => setNote(text)}
          onSelectionChange={({nativeEvent}) => {
            setSelectionStart(nativeEvent.selection.start);
            setSelectionEnd(nativeEvent.selection.end);
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditNotes;
