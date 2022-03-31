import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function SkillCard({
  id,
  skill,
  onPressToRemove,
}: {
  id: number;
  skill: string;
  onPressToRemove: (id: number) => void;
}) {
  return (
    <TouchableOpacity
      style={styles.buttonSkillName}
      activeOpacity={0.7}
      onPress={() => onPressToRemove(id)}
    >
      <Text style={styles.skillName}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkillName: {
    padding: 5,
    marginHorizontal: 40,
    marginVertical: 5,
    backgroundColor: '#2f302f',
    fontSize: 17,
    alignItems: 'center',
    borderRadius: 20,
  },
  skillName: {
    color: '#fff',
    fontSize: 17,
  },
});
