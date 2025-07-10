import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Bill Splitting App
      </Text>
      
      <Link href="/new-receipt" asChild>
        <TouchableOpacity 
          style={{
            backgroundColor: "#007AFF",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Create New Receipt
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
