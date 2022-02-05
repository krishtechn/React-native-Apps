import { View, Text, Image, Button, ScrollView, Linking } from "react-native";
import React from "react";

const App = () => {
  const card = [
    {
      image: "https://reactnative.dev/img/tiny_logo.png",
      title: "hello world",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloremque modi aliquid hic, aspernatur dignissimos et? Ametcommodi voluptas, nihil iure ullam eligendi suscipit dolores provident. Doloremque officia minima molestiae sequi.`,
      btn: "watch video",
      link: "https://www.youtube.com/watch?v=NFWGUPmMmpY",
    },
    {
      image: "https://reactnative.dev/img/tiny_logo.png",
      title: "hello world",
      desc: "this is desc",
      btn: "watch video",
      link: "https://www.youtube.com/watch?v=NFWGUPmMmpY",
    },
    {
      image: "https://reactnative.dev/img/tiny_logo.png",
      title: "hello world",
      desc: "this is desc",
      btn: "watch video",
      link: "https://www.youtube.com/watch?v=NFWGUPmMmpY",
    },
    {
      image: "https://reactnative.dev/img/tiny_logo.png",
      title: "hello world",
      desc: "this is desc",
      btn: "watch video",
      link: "https://www.youtube.com/watch?v=NFWGUPmMmpY",
    },
    {
      image: "https://reactnative.dev/img/tiny_logo.png",
      title: "hello world",
      desc: "this is desc",
      btn: "watch video",
      link: "https://www.youtube.com/watch?v=NFWGUPmMmpY",
    },
  ];
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginTop: "9%",
        }}
      >
        {card.map((item) => {
          let image = item.image;
          return (
            <View
              style={{
                borderColor: "orange",
                borderWidth: 3,
                width: 450,
                marginBottom: 30,
              }}
            >
              <View>
                <Image
                  source={{ uri: image }}
                  style={{ height: 300, objectfit: "cover" }}
                />
              </View>
              <View style={{ margin: 10, textAlign: "center" }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    fontWeight: "bold",
                    letterSpacing: 5,
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    marginBottom: 10,
                    fontSize: 15,
                  }}
                >
                  {item.desc}
                </Text>
                <Button
                  title="watch video"
                  onPress={() => Linking.openURL(item.link)}
                />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default App;
