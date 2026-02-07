import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

const TAB_COLORS = {
  light: { tint: '#0a7ea4' },
  dark: { tint: '#0e9dd8' },
} as const;

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tint = TAB_COLORS[colorScheme === 'dark' ? 'dark' : 'light'].tint;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size ?? 28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="paper-plane" size={size ?? 28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
