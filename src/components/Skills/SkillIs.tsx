import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import {SkillCard} from './SkillCard';

interface SkillsProps {
  id: number;
  name: string;
}

export function Skills({
  skills,
  onPressToRemove,
}: {
  skills: SkillsProps[];
  onPressToRemove: (id: number) => void;
}) {
  return (
    <FlatList
      style={styles.scrollView}
      data={skills}
      renderItem={({item, index}) => (
        <SkillCard
          key={index}
          id={item.id}
          skill={item.name}
          onPressToRemove={onPressToRemove}
        />
      )}
      ListEmptyComponent={
        <Text style={styles.noSkillText}>Nenhuma Skill Cadastrada</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  scrollView: {
    borderWidth: 5,
    borderColor: '#2f302f',
  },
  noSkillText: {
    marginTop: '50%',
    color: '#fff',
    alignSelf: 'center',
  },
});
