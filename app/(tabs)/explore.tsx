import { Linking, Platform, StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/Screen';

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Text style={styles.link} onPress={() => Linking.openURL(href)}>
      {children}
    </Text>
  );
}

export default function ExploreScreen() {
  return (
    <Screen scrollable>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <Text style={styles.body}>This app includes example code to help you get started.</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>File-based routing</Text>
        <Text style={styles.body}>
          This app has two screens: <Text style={styles.bold}>app/(tabs)/index.tsx</Text> and{' '}
          <Text style={styles.bold}>app/(tabs)/explore.tsx</Text>. The layout file in{' '}
          <Text style={styles.bold}>app/(tabs)/_layout.tsx</Text> sets up the tab navigator.
        </Text>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <Text style={styles.link}>Learn more</Text>
        </ExternalLink>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Android, iOS, and web support</Text>
        <Text style={styles.body}>
          You can open this project on Android, iOS, and the web. Press{' '}
          <Text style={styles.bold}>w</Text> in the terminal for web.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Light and dark mode</Text>
        <Text style={styles.body}>
          Use <Text style={styles.bold}>useColorScheme()</Text> to adapt UI to the user's color
          scheme.
        </Text>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <Text style={styles.link}>Learn more</Text>
        </ExternalLink>
      </View>

      {Platform.OS === 'ios' && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Animations</Text>
          <Text style={styles.body}>
            This template can use <Text style={styles.bold}>react-native-reanimated</Text> for
            animations.
          </Text>
        </View>
      )}
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
    marginBottom: 8,
  },
  bold: {
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  link: {
    fontSize: 16,
    color: '#0a7ea4',
  },
});
