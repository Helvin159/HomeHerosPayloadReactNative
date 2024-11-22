import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

type Props = {
  user: any;
};

const HeroCard = ({ user }: Props) => {
  console.log(user.fullName);
  const date = new Date(user.createdAt);
  const memberSince = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  const handlePress = () => {
    console.log('handle navigation');
  };
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.heading}>{user.fullName}</Text>
      <Text style={styles.text}>{user.email}</Text>
      <Text style={styles.text}>Member since {memberSince}</Text>
    </Pressable>
  );
};

export default HeroCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#000000',
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8
  },
  heading: {
    fontSize: 18,
    fontWeight: 600
  },
  text: {
    lineHeight: 18
  }
});
