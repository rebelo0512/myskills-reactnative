import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Skills} from '../components/Skills/SkillIs';
import {Button} from '../components/Button';

interface MySkillsProps {
  id: number;
  name: string;
}

export function MySkills({name}: {name: string}) {
  const [skills, setSkills] = useState<MySkillsProps[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [salutation, setSalutation] = useState('');

  function handleAdd() {
    if (!newSkill) {
      return;
    }
    setSkills(oldState => [
      ...oldState,
      {id: oldState.length + 1, name: newSkill},
    ]);
    setNewSkill('');
  }

  function handleRemove(id: number) {
    setSkills(skills.filter(s => s.id !== id));
  }

  function handleClear() {
    setSkills([]);
  }

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setSalutation('Good Morning');
      return;
    }

    if (hour > 12 && hour < 18) {
      setSalutation('Good afternoon');
      return;
    }

    setSalutation('Good night');
  }, []);

  return (
    <View style={styles.global}>
      <Text style={styles.text}>
        {salutation}, {name}
      </Text>
      <TextInput
        value={newSkill}
        style={styles.addSkillInput}
        placeholder="New Skill"
        placeholderTextColor="#888"
        onChangeText={setNewSkill}
      />
      <Button description={'Add'} onPress={handleAdd} />
      <View style={styles.viewMySkills}>
        <Text style={[styles.text]}>My Skills</Text>
        <Button description={'Clear'} onPress={handleClear} />
      </View>
      <Skills skills={skills} onPressToRemove={handleRemove} />
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
    fontSize: 24,
  },
  addSkillInput: {
    color: '#fff',
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: '#494b4d',
  },
  viewMySkills: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 35,
    marginBottom: 20,
  },
});
