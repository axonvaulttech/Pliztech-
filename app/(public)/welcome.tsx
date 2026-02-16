import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { BackgroundImageScreen } from '@/components/BackgroundImageScreen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SecondaryButton } from '@/components/SecondaryButton';

const WELCOME_BG = require('@/assets/images/welcome-bg.png');

const COLORS = {
  brandBlue: '#2E8BEA',
  white: '#FFFFFF',
} as const;

const SPACING = {
  brandToTagline: 8,
  taglineToButtons: 20,
  buttonGap: 12,
} as const;

export default function WelcomeScreen() {
  const onLogin = () => {
    router.push('/(auth)/login' as import('expo-router').Href);
  };

  const onRegister = () => {
    router.push('/(auth)/register' as import('expo-router').Href);
  };

  return (
    <BackgroundImageScreen source={WELCOME_BG}>
      <View style={styles.stack}>
        <Text style={styles.brand}>PLIZ</Text>
        <Text style={styles.tagline}>
          You ask because you&apos;re human{'\n'}You give because you&apos;re humane
        </Text>
        <View style={styles.buttons}>
          <PrimaryButton
            label="Login"
            onPress={onLogin}
            variant="gradient"
            accessibilityLabel="Go to login"
          />
          <SecondaryButton
            label="Register"
            onPress={onRegister}
            accessibilityLabel="Go to register"
          />
        </View>
      </View>
    </BackgroundImageScreen>
  );
}

const styles = StyleSheet.create({
  stack: {
    alignItems: 'center',
    flexShrink: 1,
  },
  brand: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.brandBlue,
    marginBottom: SPACING.brandToTagline,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: SPACING.taglineToButtons,
  },
  buttons: {
    width: '100%',
    gap: SPACING.buttonGap,
  },
});
