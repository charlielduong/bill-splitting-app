import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const handleNewReceipt = () => {
    router.push('/camera');
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Text style={styles.profileName}>Charlie Duong</Text>
        <View style={styles.profileImage} />
      </View>

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Bottom Button */}
      <View style={styles.bottomSection}>
        <Pressable 
          style={({ pressed }) => [
            styles.newReceiptButton,
            pressed && styles.buttonPressed
          ]}
          onPress={handleNewReceipt}
        >
          <Text style={styles.buttonText}>NEW RECEIPT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 17,
    color: '#007AFF',
    fontWeight: '400',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileName: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000000',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D1D1D6',
  },
  spacer: {
    flex: 1,
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  newReceiptButton: {
    backgroundColor: '#34C759',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 25,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#28A745',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
