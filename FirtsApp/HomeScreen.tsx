import React, { useLayoutEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./GlobalStyles";

function HomeScreen({ navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{ paddingLeft: 12 }} onPress={() => {
          navigation.goBack();
        }}>
          <Text style={{ color: '#007AFF' }}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

export default HomeScreen;