import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

const Home = (props) => {
  const [names, setNames] = React.useState([]);
  React.useEffect(() => {
    const res = fetch("https://pokeapi.co/api/v2/pokemon/");
    res.then((res) =>
      res.json().then((names) => {
        setNames(names.results);
        // console.log(names.count);
      })
    );
  }, []);

  const Item = ({ name }) => (
    <View>
      <Text>{name}</Text>
    </View>
  );

  const renderItem = ({ item }) => {
    console.log("render ", item);
    return <Item name={item.name} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => props.navigation.navigate("Second Screen")}
      >
        <View style={{}}>
          <Text style={{ fontSize: 18 }}>Home Screen</Text>
        </View>
      </TouchableOpacity> */}
      {/* <ScrollView>
        {names.results.map((item, index)=>{
          return(
            <View key={index} >
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      {names.length > 0 && (
        <FlatList
          data={names}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{ padding: 10, margin: 5 }}>
                <Text>{`${index + 1}). ${item.name}`}</Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Home;
