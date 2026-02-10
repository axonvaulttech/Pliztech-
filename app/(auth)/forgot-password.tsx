import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';

export default function ForgotPasswordScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.body}>Enter your email to reset your password. (Stub)</Text>
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
    paddingHorizontal: 24,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
});
