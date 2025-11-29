import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from "expo-router/unstable-native-tabs";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        {Platform.OS === "android" ? (
          <Icon src={<VectorIcon family={MaterialIcons} name="home" />} />
        ) : (
          <Icon sf={{ default: "house", selected: "house.fill" }} />
        )}
        <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="appointment">
        {Platform.OS === "android" ? (
          <Icon
            src={<VectorIcon family={MaterialIcons} name="calendar-month" />}
          />
        ) : (
          <Icon sf={{ default: "calendar", selected: "calendar" }} />
        )}
        <Label>Appointment</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="notification">
        {Platform.OS === "android" ? (
          <Icon
            src={<VectorIcon family={MaterialIcons} name="notifications" />}
          />
        ) : (
          <Icon sf={{ default: "bell", selected: "bell.fill" }} />
        )}
        <Label>Notification</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        {Platform.OS === "android" ? (
          <Icon src={<VectorIcon family={MaterialIcons} name="person" />} />
        ) : (
          <Icon sf={{ default: "person", selected: "person.fill" }} />
        )}
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
