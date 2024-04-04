import 'react-native-gesture-handler';
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { colors } from "./src/global/styles";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./src/Navigation/RootNavigator";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <StatusBar 
        translucent
        barStyle="dark-content"
      /> */}
        <RootNavigator />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight
  },
});
