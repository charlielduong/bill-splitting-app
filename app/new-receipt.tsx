import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function NewReceipt() {
  const router = useRouter();
  const [receiptName, setReceiptName] = useState("");
  
  return (
    <ScrollView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "New Receipt" }} />
      
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 8 }}>
          Receipt Name
        </Text>
        
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 12,
            marginBottom: 20,
          }}
          placeholder="Enter receipt name"
          value={receiptName}
          onChangeText={setReceiptName}
        />
        
        <TouchableOpacity
          style={{
            backgroundColor: "#007AFF",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            alignItems: "center",
          }}
          onPress={() => {
            // Save receipt logic would go here
            router.back();
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Save Receipt
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}