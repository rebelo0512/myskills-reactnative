import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  description: string;
}

export function Button({description, onPress}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.addSkillButton}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={[styles.text, styles.addSkillButtonText]}>
        {description}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 24,
  },
  addSkillButton: {
    padding: 10,
    backgroundColor: '#740c75',
    borderRadius: 10,
  },
  addSkillButtonText: {
    alignSelf: 'center',
  },
});
