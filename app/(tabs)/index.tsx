import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/Screen';

export default function HomeScreen() {
  return (
    <Screen scrollable>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome!</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.subtitle}>Step 1: Try it</Text>
        <Text style={styles.body}>
          Edit <Text style={styles.bold}>app/(tabs)/index.tsx</Text> to see changes. Press{' '}
          <Text style={styles.bold}>
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </View>
      <View style={styles.block}>
        <Link href="/modal" style={styles.link}>
          <Text style={styles.subtitle}>Step 2: Explore</Text>
        </Link>
        <Text style={styles.body}>Tap the Explore tab to learn more.</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.subtitle}>Step 3: Get a fresh start</Text>
        <Text style={styles.body}>
          When you're ready, run <Text style={styles.bold}>npm run reset-project</Text> to get a
          fresh app directory.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  bold: {
    fontWeight: '600',
  },
  block: {
    marginBottom: 24,
  },
  link: {
    marginBottom: 8,
  },
});
