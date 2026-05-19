import { View, StyleSheet } from "react-native";
import { Calendar } from "react-native-bs-calendar";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Calendar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
