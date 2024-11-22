import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import ServiceProviderCard from '../ServiceProviderCard/ServiceProviderCard';


const ServiceSearch = () => {
  const [users, setUsers] = useState<Array<any> | null>(null);
  const [fetching, setFetching] = useState<Boolean>(false);

  const handleSearch = (value: string) => {
    // If input is empty, set users to null and return
    if (value === '') {
      setUsers(null);
      return;
    }
    if (fetching === false) {
      // Set fetching to true
      setFetching(true);
      // Fetch
      setTimeout(async () => {
        try {
          const results = await fetch(
            'https://needaservice.mrrymer.com//api/find-by-service-offered',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ value: value })
            }
          );

          const data: any = await results.json();
          // Set Users
          setUsers(data);
          console.log(users);
          // Set fetching to false
          setFetching(false);
        } catch (e) {
          // Log Error message
          console.error(e);
          // Set fetching to false
          setFetching(false);
        }
      }, 100);
    }
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          id='search-bar'
          placeholder='Start your search for the hero you need...'
          onChangeText={handleSearch}
          style={styles.textInput}
        />
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={users}
          renderItem={(i: { item: any; index: number }) => (
            <ServiceProviderCard user={i.item} key={i.index} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 16,
    alignContent: 'center',
    height: '100%'
  },
  searchContainer: {
    padding: 16,
    alignContent: 'center'
  },
  textInput: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    borderRadius: 8
  }
});

export default ServiceSearch;
