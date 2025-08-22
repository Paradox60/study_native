import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import WordsScreen from './src/screens/WordsScreen';
import TrainingScreen from './src/screens/TrainingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Words" component={WordsScreen} />
        <Stack.Screen name="Training" component={TrainingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// import React, { useEffect, useState } from "react";
// import { Text, View } from "react-native";
// import { API_URL } from "./config";

// export default function App() {
//   const [response, setResponse] = useState("Загрузка...");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`${API_URL}/ping`);
//         const data = await res.text();
//         setResponse(`API ответ: ${data}`);
//       } catch (e) {
//         setResponse("API ответ: Ошибка соединения");
//         console.log(e);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>{response}</Text>
//     </View>
//   );
// }



