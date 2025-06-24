import { Tabs } from 'expo-router';
import { Text } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

function TabEmojiIcon({ emoji }: { emoji: string }) {
  return <Text style={{ fontSize: 22 }}>{emoji}</Text>;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "explore",
          tabBarIcon: () => <TabEmojiIcon emoji="🏡" />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "map",
          tabBarIcon: () => <TabEmojiIcon emoji="🗺️" />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: "report",
          tabBarIcon: () => <TabEmojiIcon emoji="📝" />,
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: "alerts",
          tabBarIcon: () => <TabEmojiIcon emoji="⚠️" />,
        }}
      />
      <Tabs.Screen
        name="trails"
        options={{
          title: "trails",
          tabBarIcon: () => <TabEmojiIcon emoji="🥾" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: () => <TabEmojiIcon emoji="🌲" />,
        }}
      />
    </Tabs>
  );
}
