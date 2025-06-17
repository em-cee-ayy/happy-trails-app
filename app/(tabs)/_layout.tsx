import { Tabs } from 'expo-router';
import { Text } from 'react-native'; // 💡 don't forget this!

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "explore", tabBarIcon: () => <Text>🏡</Text> }} />
      <Tabs.Screen name="profile" options={{ title: "profile", tabBarIcon: () => <Text>🌲</Text> }} />
      <Tabs.Screen name="trails" options={{ title: "trails", tabBarIcon: () => <Text>🥾</Text> }} />
      <Tabs.Screen name="alerts" options={{ title: "alerts", tabBarIcon: () => <Text>⚠️</Text> }} />
      <Tabs.Screen name="map" options={{ title: "map", tabBarIcon: () => <Text>🗺️</Text> }} />
      <Tabs.Screen name="report" options={{ title: "report", tabBarIcon: () => <Text>📝</Text> }} />
    </Tabs>
  );
}