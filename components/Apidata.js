import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";

const Apidata = () => {
  const [data, setdata] = useState([]);
  const Getdatafromapi = async () => {
    //alert("hello");
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const mydata = await response.json();
      setdata(mydata);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    Getdatafromapi();
  }, []);

  return (
    <View style={styles.container}>
      {data.map((item) => {
        let image = item.image;
        return (
          <View
            style={{
              backgroundColor: "#f1f1f1",
              width: "90%",
              margin: 30,
              borderRadius: 10,
              padding: 30,
            }}
          >
            <Text>your id is {item.userId}</Text>
            <Text>your name is {item.name}</Text>
            <Text>your name is {item.email}</Text>
            <Text>your name is {item.website}</Text>
            <Text>your name is {item.mobile}</Text>
            <Text>your name is {item.website}</Text>
            <Text>your name is {item.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    color: "white",
    width: "100%",
    height: "100%",
  },
});

export default Apidata;
