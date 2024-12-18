import { StyleSheet, View, Text, Image} from "react-native";
import Flexbox from "./Flexbox";
import PropsDinamis from "./PropsDinamis";
import StateDinamis from "./StateDinamis";

export default function Index() {
  return (
    <View>
      <Flexbox />
      <PropsDinamis />
      <StateDinamis />
    </View>
  );
};