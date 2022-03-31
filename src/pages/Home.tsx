import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Button} from '../components/Button';
import {MySkills} from './MySkills';

export function Home() {
  const [passWindow, setPassWindows] = useState(false);
  const [name, setName] = useState('');

  return (
    <View style={styles.global}>
      {!passWindow ? (
        <>
          <Text style={styles.text}>Say your name</Text>
          <TextInput
            style={styles.addNameInput}
            placeholder={'Name'}
            placeholderTextColor={'#888'}
            onChangeText={setName}
          />
          <Button description={'Send'} onPress={() => setPassWindows(true)} />
        </>
      ) : (
        <MySkills name={name} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#0a0f0b',
  },
  text: {
    color: '#fff',
    fontSize: 35,
    marginTop: '50%',
  },
  addNameInput: {
    color: '#fff',
    padding: 15,
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: '#494b4d',
  },
});
