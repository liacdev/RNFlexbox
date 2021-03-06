import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 1, backgroundColor: "darkorange" }}>
        <Text>Crunchy</Text>
      </View>

      <View style={{ flex: 2, backgroundColor: "pink" }}>
        <Text>Schwifty</Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "lightblue" }}>
        <Text>Rutabaga</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default Flex;
