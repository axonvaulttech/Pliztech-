import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/Screen';

// -----------------------------------------------------------------------------
// Constants (no magic numbers)
// -----------------------------------------------------------------------------
const COLORS = {
  background: '#FFFFFF',
  appName: '#1F2937',
  footer: '#6B7280',
} as const;

const SPACING = {
  logoToAppName: 16,
  logoSize: 160,
  footerBottomPadding: 32,
} as const;

const FONT = {
  appNameSize: 28,
  appNameWeight: '700' as const,
  footerSize: 14,
  footerWeight: '400' as const,
};

const SPLASH_DURATION_MS = 2000;
const NEXT_ROUTE = '/(public)/welcome';

// Logo asset. Project has pliz-logo.png; use pliz-logo.jpg if you add it under assets/images/
const LOGO_SOURCE: ImageSourcePropType = require('@/assets/images/pliz-logo.png');

export default function SplashScreen() {
  const hasNavigated = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (hasNavigated.current) return;
      hasNavigated.current = true;
      router.replace(NEXT_ROUTE);
    }, SPLASH_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <Screen backgroundColor={COLORS.background}>
      <View style={styles.centerSection}>
        <Image
          source={LOGO_SOURCE}
          style={styles.logo}
          contentFit="contain"
          accessibilityLabel="Pliz app logo"
          accessibilityRole="image"
        />
        <Text
          style={styles.appName}
          accessibilityLabel="Pliz"
          accessibilityRole="text"
        >
          PLIZ
        </Text>
      </View>
      <View style={styles.footer}>
        <Text
          style={styles.footerText}
          accessibilityLabel="Axonvault Innovations"
          accessibilityRole="text"
        >
          Axonvault Innovations
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: SPACING.logoSize,
    height: SPACING.logoSize,
    maxWidth: '70%',
    maxHeight: 240,
  },
  appName: {
    marginTop: SPACING.logoToAppName,
    fontSize: FONT.appNameSize,
    fontWeight: FONT.appNameWeight,
    color: COLORS.appName,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: SPACING.footerBottomPadding,
  },
  footerText: {
    fontSize: FONT.footerSize,
    fontWeight: FONT.footerWeight,
    color: COLORS.footer,
  },
});
