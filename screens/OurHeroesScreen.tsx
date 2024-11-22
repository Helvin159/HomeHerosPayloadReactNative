import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HeroCard from '../components/HeroCard';

const OurHeroesScreen = () => {
  const [heroes, setHeroes] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://needaservice.mrrymer.com/api/find-users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setHeroes(data)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <View style={styles.flatListContainer}>
        <FlatList data={heroes} renderItem={(data) => <HeroCard user={data.item} key={data.index} />} />
      </View>
    </View>
  );
};

export default OurHeroesScreen;

const styles = StyleSheet.create({
  flatListContainer: {
    gap: 16
  }
});
