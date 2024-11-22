import { Image, Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

type Props = {
  user: any;
};

const HeroCard = ({ user }: Props) => {
  const date = new Date(user.createdAt);
  const memberSince = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  const handlePress = () => {
    console.log(`handle navigation ${user.id}`, user);
  };
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image
        source={user.featuredImageUrl}
        style={{ height: 100, width: 100, borderRadius: '50%' }}
      />
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
    padding: 24,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8,
    boxShadow: ' 0 0 6px rgba(0,0,0,0.15)',
    borderRadius: 8
  },
  heading: {
    fontSize: 18,
    fontWeight: 600
  },
  text: {
    lineHeight: 18
  }
});
