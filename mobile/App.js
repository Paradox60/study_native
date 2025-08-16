import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { API_URL } from "./config";

export default function App() {
  const [response, setResponse] = useState("Загрузка...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/ping`);
        const data = await res.text();
        setResponse(`API ответ: ${data}`);
      } catch (e) {
        setResponse("API ответ: Ошибка соединения");
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{response}</Text>
    </View>
  );
}
