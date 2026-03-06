import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(main)',
};

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      <Stack.Screen name="request/[id]" options={{ headerShown: false, presentation: 'card' }} />
      <Stack.Screen name="payment-cards" options={{ headerShown: false, presentation: 'card' }} />
      <Stack.Screen name="personal-info" options={{ headerShown: false, presentation: 'card' }} />
      <Stack.Screen name="edit-personal-info" options={{ headerShown: false, presentation: 'card' }} />
      <Stack.Screen name="security-settings" options={{ headerShown: false, presentation: 'card' }} />
    </Stack>
  );
}
