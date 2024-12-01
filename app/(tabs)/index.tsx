//Soal No.2 
// Contoh Komponen Fungsional:
import React from 'react';
import { Text, View } from 'react-native';

const FunctionalComponent = () => {
  return (
    <View>
      <h1>Hello, React Native!</h1>
    </View>
  );
};

export default FunctionalComponent;


// Contoh Komponen Berbasis Kelas:
// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class ClassComponent extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Hello, React Native!</Text>
//       </View>
//     );
//   }
// }

// export default ClassComponent;

// Soal No 3  
// import React from 'react';
// import { View, Button, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonContainer}>
//         <Button title="Button 1" color="blue" onPress={() => alert('Button 1 pressed')} />
//         <Button title="Button 2" color="green" onPress={() => alert('Button 2 pressed')} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: 200,
//   },
// });

// export default App;



// No.4
// import React, { useState } from 'react';
// import { View, Button, Text, StyleSheet } from 'react-native';

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Jumlah Klik: {count}</Text>
//       <Button title="Klik Saya" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 10,
//   },
// });

// export default App;


// Soal No.5

// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import type { NativeStackScreenProps } from '@react-navigation/native-stack'; // Import tipe

// // Tipe untuk Stack Navigator
// type RootStackParamList = {
//   First: undefined;
//   Second: undefined;
// };

// type FirstScreenProps = NativeStackScreenProps<RootStackParamList, 'First'>;

// const Stack = createStackNavigator<RootStackParamList>();

// const FirstScreen = ({ navigation }: FirstScreenProps) => {
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Go to Second Screen"
//         onPress={() => navigation.navigate('Second')}
//       />
//     </View>
//   );
// };

// const SecondScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>This is the Second Screen</Text>
//     </View>
//   );
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="First">
//         <Stack.Screen name="First" component={FirstScreen} />
//         <Stack.Screen name="Second" component={SecondScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//   },
// });