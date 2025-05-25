import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Home", tabBarIcon: () => "🏠" }} />
      <Tabs.Screen name="trails" options={{ title: "Trails", tabBarIcon: () => "🥾" }} />
      <Tabs.Screen name="alerts" options={{ title: "Alerts", tabBarIcon: () => "⚠️" }} />
    </Tabs>
    
  );
}
