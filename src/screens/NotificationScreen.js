import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WideButton } from "../components";
import colors from "../theme/colors";

export default function NotificationScreen() {
  const navigation = useNavigation();

  const notifications = [
    {
      frequency: "",
      prayer: "",
      enabled: true,
    },
  ];

  console.log("notifications:", notifications.length);

  return notifications.length > 0 ? (
    <ScrollView style={styles.container}>
      <Text>has notifications</Text>
      <WideButton
        text="Notifications"
        onPress={() => navigation.navigate("Create Notification")}
      />
    </ScrollView>
  ) : (
    <ScrollView style={styles.container}>
      <Text>no notifications </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral95,
    padding: 15,
  },
});
