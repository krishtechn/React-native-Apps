import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const Counter = () => {
  const [value, setvalue] = useState(0);
  const randnumber = () => {
    let random = Math.ceil(Math.random() * 300);
    alert(random);
    setvalue(random);
  };

  return (
    <View
      style={{
        margin: 3,
        textAlign: "center",
        padding: 2,
      }}
    >
      <Text style={styles.title}>Counter App</Text>
      <Text style={[styles.title, styles.size]}>{value}</Text>
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setvalue(value + 10)}
            >
              <Text style={styles.title}>+10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => setvalue(0)}>
              <Text style={styles.title}>Reset</Text>
            </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              value > 0 ? setvalue(value - 10) : "";
            }}
          >
            <Text style={styles.title}>-10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={randnumber}>
            <Text style={styles.title}>Generate Random</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    marginVertical: 30,
    fontWeight: "bold",
    color: "black",
  },
  btn: {
    backgroundColor: "black",
    width: "40%",
    marginVertical: 30,
  },
  size: {
    fontSize: 40,
  },
});

export default Counter;
