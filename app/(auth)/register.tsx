import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';

export default function RegisterScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <PrimaryButton
          label="Back to Login"
          onPress={() => router.back()}
          variant="solid"
          accessibilityLabel="Go back to login"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
