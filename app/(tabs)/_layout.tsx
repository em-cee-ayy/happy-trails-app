import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "explore", tabBarIcon: () => "🏡" }} />
      <Tabs.Screen name="profile" options={{ title: "profile", tabBarIcon: () => "🌲" }} />
      <Tabs.Screen name="trails" options={{ title: "trails", tabBarIcon: () => "🥾" }} />
      <Tabs.Screen name="alerts" options={{ title: "alerts", tabBarIcon: () => "⚠️" }} />
      <Tabs.Screen name="report" options={{ title: "report", tabBarIcon: () => "📝" }} />
    </Tabs>
    
  );
}
