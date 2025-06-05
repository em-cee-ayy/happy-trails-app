import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "home", tabBarIcon: () => "🏡" }} />
      <Tabs.Screen name="history" options={{ title: "test", tabBarIcon: () => "🌲" }} />
      <Tabs.Screen name="trails" options={{ title: "trails", tabBarIcon: () => "🥾" }} />
      <Tabs.Screen name="alerts" options={{ title: "alerts", tabBarIcon: () => "⚠️" }} />
    </Tabs>
    
  );
}
