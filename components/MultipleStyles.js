import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

const MultipleStyles = () => {
  return (
    <View>
      <Text>adding Multiple styles in one Element</Text>
      <View style={styles.box}>
        <Text style={[styles.text1,styles.commonstyles]}>Multiple styles in one Element</Text>
        <Text style={[styles.text2,styles.commonstyles]}>Multiple styles in one Element</Text>
        <Text style={[styles.text3,styles.commonstyles]}>Multiple styles in one Element</Text>
      </View>
    </View>
  );
};

  const styles = StyleSheet.create({
    box: {
      borderColor: "black",
      borderWidth: 1,
    },
    text1: {
      backgroundColor: "red",
    },
    text2: {
      backgroundColor: "blue",
    },
    text3: {
      backgroundColor: "green",
    },
    commonstyles: {
      fontSize: 30,
      fontWeight: "bold",
      color: "white",
      marginHorizontal: 30,
    },
  });



export default MultipleStyles;
